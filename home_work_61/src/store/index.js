import { createStore } from 'vuex';

const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/XdE1v9zVDSoRe6S5013cteykw1ZDC0u9');

export default createStore({
    state: {
        blocks: []
    },
    getters: {
    },
    mutations: {
        addBlock(state, newBlock) {
            state.blocks.unshift(newBlock)
        }
    },
    actions: {
        async newBlockHeaders({ commit }) {
            provider.on("block", async blockNumber => {
                let block = await provider.getBlock(blockNumber);
                let newBlock = {
                    number: block.number,
                    hash: block.hash
                }
                commit("addBlock", newBlock)
            })
        },
        async getBlock({ commit }, blockNumberOrHash) {
            if(!ethers.utils.isBytesLike(blockNumberOrHash)){
                blockNumberOrHash = Number(blockNumberOrHash)
            }
            return await provider.getBlock(blockNumberOrHash)
        },
        async getTx({ commit }, txHash) {
            console.log(txHash);
            return await provider.getTransaction(txHash);
        },
    },
    modules: {
    }
})

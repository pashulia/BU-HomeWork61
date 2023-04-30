<template>
    <h3>Информация о транзакции: </h3>
    <hr/>
    <ul>
        <li class="tx">
            Номер блока: 
            <a @click="$router.push(`/block/${tx.blockNumber}`)">{{ tx.blockNumber }}</a>
        </li>
        <li>Хэш блока: {{ tx.blockHash }}</li>
        <li>Отправитель: {{ tx.from }}</li>
        <li>Получатель: {{ tx.to }}</li>
        <li>Затрачено газа: {{ tx.gas }}</li>
        <li>Цена газа: {{ tx.gasPrice }}</li>
        <li>Хэш транзакции: {{ tx.hash }}</li>
        <li>Номер(nonce): {{ tx.nonce }}</li>
        <li>Кол-во переслоного эфира: {{ tx.value }}</li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "tx-item",
    data() {
        return {
            tx: {}
        }
    },
    props: {
        transactionHash: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions({
            getTx: "getTx"
        })
    },
    async mounted() {
        this.tx = await this.getTx(this.transactionHash);
    },
    watch: {
        async transactionHash() {
            this.tx = await this.getTx(this.transactionHash);
        }
    },
}
</script>

<style>
    .tx :hover {
        color: #071bf5;
        cursor: pointer;
    }
</style>

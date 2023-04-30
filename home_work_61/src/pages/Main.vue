<template>
    <h1>Обозреватель блокчейн</h1>
    <block v-for="block in $store.state.blocks" :block="block"/>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            newBlockHeaders: "newBlockHeaders"
        })
    },
    mounted() {
        this.newBlockHeaders();
    }
}
</script>

<style scoped>
    .link {
        color: #eb9e3a;
        cursor: pointer;
        padding: 5px;
    }
    strong :hover {
        background-color: #c10a0a;
        color: #f7f5f4;
        border-radius: 5px;
    }
    .tx_send {
        padding: 10px;
        background-color: #dad9d9;
    }
    input {
        margin-right: 5px;
    }
    button {
        background-color: #b4f6c1
    }
    .deploy {
        padding: 10px;
        background-color: #dad9d9;
        margin: 10px 0;
        
    }

</style>

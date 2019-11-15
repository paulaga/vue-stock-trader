<template>
    <div class="stock-card">
        <div class="stock-card_header">
            <h2>{{ stock.name }}</h2>
            <p>(Price: {{ stock.price }})</p>
        </div>
        <div class="stock-card_content">
            <input 
                type="number" 
                placeholder="quantity"
                v-model="quantity">
            <button
                :disabled="quantity <= 0 || funds < (this.stock.price * this.quantity)"
                @click="buyStock(stock.id)">Buy</button>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: null
            }
        },
        computed: {
            funds() {
                return this.$store.state.totalFund
            },
        },
        methods: {
            buyStock(id) {
                this.$store.dispatch('buyStock', {id: id, quantity: this.quantity})
            }
        }
    }
</script>
<style>
    h2 {
        margin-right: 20px;
    }
    button {
        width: 100px;      
        background: #a8e5d8;
    }
    button:disabled {
        background: #f0fffb;
        border: 1px solid #ccc;
        cursor: default;
    }
    .stock-card,
    .stock-card_content {
        margin: 20px;
    }
    .stock-card {
        border: 1px solid #76eed4;
        border-radius: 4px;
        width: 45%;
    }
    .stock-card_header {
        display: flex;
        align-items: center; 
        padding: 6px 20px;
        background: #76eed4;
    }
    .stock-card_content {
        display: flex;
        align-items: center; 
        justify-content: space-between;
    }
</style>

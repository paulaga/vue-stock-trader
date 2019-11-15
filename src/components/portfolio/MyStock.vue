<template>
    <div 
        v-if="stock.quantity"
        class="stock-card">
        <div class="stock-card_header">
            <h2>{{ stock.name }}</h2>
            <p>(Price: {{stock.price }} | Quantity: {{stock.quantity }})</p>
        </div>
        <div class="stock-card_content">
            <input 
                type="number" 
                placeholder="quantity"
                v-model="quantity">
            <button
                :disabled="quantity <= 0 || Number(quantity) > stock.quantity"
                @click="sellMyStock(stock.id)">Sell</button>
        </div>
    </div>
</template>
<script>
    // import { mapActions } from 'vuex'
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: null
            }
        },
        methods: {
            sellMyStock(id) {
                this.$store.dispatch('sellMyStock', {id: id, quantity: this.quantity})
            }
        }
    }
</script>
<style scoped>
    h2, p {
        color: #FFF;
    }
    button {
        background: #b5b5e7;
    }
    .stock-card {
        border: 1px solid #7678ee;
    }
    .stock-card_header {
        background: #7678ee;
    }
</style>

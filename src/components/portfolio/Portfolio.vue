<template>
    <div>
        <app-my-stock 
            v-for="(stock) in stocks"
            :key="stock.id"
            :stock="stock"></app-my-stock>
    </div>
</template>
<script>
    import MyStock from './MyStock'
    export default {
        data() {
            return {
                stocks: this.$store.state.stocks
            }
        },
        components: {
            appMyStock: MyStock
        }
    }
</script>
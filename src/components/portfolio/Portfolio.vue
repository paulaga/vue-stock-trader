<template>
    <div>
        <app-my-stock 
            v-for="stock in stocks"
            :key="stock.id"
            :stock="stock"></app-my-stock>
    </div>
</template>
<script>
    import MyStock from './MyStock'
    export default {
        components: {
            appMyStock: MyStock
        },
        data() {
            return {
                stocks: this.$store.state.stocks
            }
        }
    }
</script>
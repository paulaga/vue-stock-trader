import Vue from 'vue'
import Vuex from 'vuex'
import stocks from '../data/stocks'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        totalFund: 10000,
        stocks: stocks,
    },
    mutations: {
        setNewStockPrice: (state, payload) => {
            state.stocks = payload
        },
        buyStock: (state, payload) => {
            let currentStock = state.stocks[payload.id]
            state.totalFund -= (currentStock.price * payload.quantity)
            currentStock.quantity += Number(payload.quantity)
        },
        sellMyStock: (state, payload) => {
            let currentStock = state.stocks[payload.id]
            state.totalFund += (currentStock.price * payload.quantity)
            currentStock.quantity -= payload.quantity
        }
    },
    actions: {
        newStockPrice: context => {
            let newStocks = context.state.stocks.map(stock => {
                stock.price = Math.round(Math.random() * (100 - 5) + 5)
                return stock
            })
            context.commit('setNewStockPrice', newStocks)
        },
        buyStock: (context, payload) => {
           context.commit('buyStock', payload)
        },
        sellMyStock: (context, payload) => {
           context.commit('sellMyStock', payload)
        } 
    }
})
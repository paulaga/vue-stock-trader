<template>
<nav>
    <ul>
        <router-link to="/" tag="li"><a>Stock Trader</a></router-link>
        <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
        <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
    </ul>
    <div class="menu-secondary">
        <ul>
            <li @click="newStockPrice">End Day</li>
            <li class="dropdown">
                <a>Save & Load</a>
                <ul class="dropdown-content">
                    <li>Save</li>
                    <li>Load</li>
                </ul>
            </li>
        </ul>
        <p class="bold">Funds: ${{ fund }}</p>
    </div>
</nav>
</template>
<script>
import { mapActions } from 'vuex'
    export default {
        computed: {
            fund() {
                return this.$store.state.totalFund
            }
        },
        methods: {
            ...mapActions([
                'newStockPrice'
            ])
        }
    }
</script>
<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: #eee;
    }
    ul,
    .menu-secondary {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
        list-style: none;
    }
    li, p {
        margin: 0 16px;
    }
    li {
        cursor: pointer;
    }
    .dropdown {
        display: inline-block;
        position: relative;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        padding: 16px 0;
        background: none;
    }
    .dropdown-content li {
        text-align: left;
        width: 90px;
        margin: 0;
        padding: 5px 0;
        border-bottom: 1px solid #2b99e2;
    }
    .dropdown-content li:hover {
        color: #2b99e2;
    }
</style>
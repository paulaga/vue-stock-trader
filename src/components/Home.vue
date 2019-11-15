<template>
  <div class="card">
      <h1>Trader or View your Portfolio</h1>
      <p>You may Save & Load your Data</p>
      <p>Click on 'End Day' to begin a new Day!</p>
      <hr>
      <p class="bold">Your Funds: <span :class="{danger: funds < 100}">${{ funds }}</span></p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.state.totalFund
    }
  }
}
</script>

<style>
  .card {
    border: 1px solid #eee;
    padding: 20px;
    margin: 20px;
  }
  hr {
    margin: 10px 0;
    color: #f8f8f8;
  }
</style>
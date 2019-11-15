<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/common/Header'
export default {
  components: {
    appHeader: Header,
  }
}
</script>

<style>
*, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  line-height: 1.5em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
a, button {
  text-decoration: none;
  cursor: pointer;
}
.bold{
  font-weight: bold;
}
.danger { 
  color: #e22d00;
}
@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}
</style>

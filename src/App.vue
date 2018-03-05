<template>
  <div id="app">
    <img src="./assets/sondage.png" alt="logo" width="400" height="150">
    <Poll/>
  </div>
</template>

<script>
import Poll from './components/Poll'

export default {
  name: 'App',
  components: {
    Poll
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

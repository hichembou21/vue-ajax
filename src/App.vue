<template>
  <div id="app">
    <create></create>
    <answer/>
    <result/>
  </div>
</template>

<script>
import create from './components/create';
import answer from './components/answer';
import result from './components/result';


export default {
  name: 'App',
  components: {
    create,
    answer,
    result
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

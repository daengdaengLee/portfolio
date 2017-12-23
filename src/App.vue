<template>
  <div id="app">
    <portfolio></portfolio>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio';

export default {
  name: 'app',
  components: {
    Portfolio,
  },
};
</script>

<style>
/* css reset */
@import url('./assets/css/reset.css');
/* google font */
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i');
body {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>

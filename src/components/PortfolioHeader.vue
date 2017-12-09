<template>
  <header class="PortfolioHeader">
    <h1>PortfolioHeader</h1>
    <portfolio-contacts></portfolio-contacts>
  </header>
</template>

<script>
import PortfolioContacts from './PortfolioContacts';

export default {
  name: 'PortfolioHeader',
  components: {
    PortfolioContacts,
  },
};
</script>

<style>
</style>

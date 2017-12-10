<template>
  <div class="Portfolio">
    <portfolio-header></portfolio-header>
    <router-view/>
    <portfolio-footer></portfolio-footer>
  </div>
</template>

<script>
import PortfolioHeader from './PortfolioHeader';
import PortfolioFooter from './PortfolioFooter';

export default {
  name: 'Portfolio',
  components: {
    PortfolioHeader,
    PortfolioFooter,
  },
};
</script>

<style>
</style>

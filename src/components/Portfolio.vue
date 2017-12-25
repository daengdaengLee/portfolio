<template>
  <div class="Portfolio">
    <portfolio-header></portfolio-header>
    <router-view></router-view>
    <portfolio-footer></portfolio-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioHeader from './PortfolioHeader';
import PortfolioFooter from './PortfolioFooter';

export default {
  name: 'Portfolio',
  computed: mapState(['footerInfo']),
  components: {
    PortfolioHeader,
    PortfolioFooter,
  },
};
</script>

<style scoped>
.Portfolio {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

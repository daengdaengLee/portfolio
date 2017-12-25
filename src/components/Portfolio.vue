<template>
  <div class="Portfolio">
    <portfolio-header></portfolio-header>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
    <portfolio-footer></portfolio-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioHeader from './PortfolioHeader';
import PortfolioFooter from './PortfolioFooter';

export default {
  name: 'Portfolio',
  computed: mapState(['footerInfo', 'currentView']),
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

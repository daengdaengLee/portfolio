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
import PortfolioProjects from './PortfolioProjects';
import PortfolioCareers from './PortfolioCareers';

export default {
  name: 'Portfolio',
  computed: mapState(['footerInfo', 'currentView']),
  components: {
    PortfolioHeader,
    PortfolioFooter,
    PortfolioProjects,
    PortfolioCareers,
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

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
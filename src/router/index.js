import Vue from 'vue';
import Router from 'vue-router';
import PortfolioProjects from '@/components/PortfolioProjects';
import PortfolioCareers from '@/components/PortfolioCareers';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/portfolio',
      name: 'PortfolioProjects',
      component: PortfolioProjects,
    },
    {
      path: '/portfolio/career',
      name: 'PortfolioCareers',
      component: PortfolioCareers,
    },
  ],
});

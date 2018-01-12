import Vue from 'vue';
import Router from 'vue-router';
import PortfolioProjects from '@/components/PortfolioProjects/PortfolioProjects';
import PortfolioAbout from '@/components/PortfolioAbout/PortfolioAbout';

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
      path: '/portfolio/about',
      name: 'PortfolioAbout',
      component: PortfolioAbout,
    },
  ],
});

import Vue from 'vue';
import Router from 'vue-router';
import PortfolioProjects from '@/components/PortfolioProjects';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PortfolioProjects',
      component: PortfolioProjects,
    },
  ],
});

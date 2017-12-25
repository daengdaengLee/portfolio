<template>
  <ul class="PortfolioMenu">
    <li @click="navigate('PortfolioProjects', 'router')">Projects</li>
    <li @click="navigate('PortfolioCareers', 'router')">Career</li>
    <li @click="navigate('https://daengdaenglee.github.io', 'link')">Blog</li>
  </ul>
</template>

<script>
import _ from 'lodash';
import { mapActions } from 'vuex';
import Constant from '../assets/js/Constant';

export default {
  name: 'PortfolioMenu',
  methods: _.extend(
    {
      navigate(uri, type) {
        if (type === 'router') {
          this.changeView({ name: uri });
        } else if (type === 'link') {
          window.open(uri, '_blank');
        }
      },
    },
    mapActions({ changeView: Constant('CHANGE_VIEW') }),
  ),
};
</script>

<style scoped>
.PortfolioMenu {
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: center;
}
.PortfolioMenu li {
  box-sizing: border-box;
  width: 26%;
  margin: 0 0.5rem;
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 0.2rem;
  color: gray;
  font-size: 1rem;
  font-weight: 300;
}
.PortfolioMenu li:hover {
  background-color: darkgray;
  cursor: pointer;
  color: white;
}
@media (min-width: 768px) {
  .PortfolioMenu li {
    width: 7rem;
    font-size: 1.2rem;
  }
}
</style>

<template>
  <section class="PortfolioCareers">
    <h2 class="headingText">Careers</h2>
    <portfolio-career
      v-for="career in careerInfo"
      :key="career.id"
      :content="career.content"
    >
    </portfolio-career>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioCareer from './PortfolioCareer';

export default {
  name: 'PortfolioCareers',
  computed: mapState(['careerInfo']),
  components: {
    PortfolioCareer,
  },
};
</script>

<style>
</style>

<template>
  <section class="PortfolioProjects">
    <h2 class="headingText">Projcets</h2>
    <div class="row justify-content-around">
      <portfolio-project
        v-for="project in projectsInfo"
        :key="project.id"
        :thumbnailURL="project.imgUrl"
        :altMessage="project.altMessage"
        class="col-md-5"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioProject from './PortfolioProject/PortfolioProject';

export default {
  name: 'PortfolioProjects',
  computed: mapState(['projectsInfo']),
  components: {
    PortfolioProject,
  },
};
</script>

<style scoped>
.PortfolioProjects .headingText {
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  padding: 1rem 0 3rem 0;
}
</style>

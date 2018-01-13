<template>
  <section class="PortfolioProjects">
    <h2 class="headingText text-center py-3">Projects</h2>
    <div class="row justify-content-around">
      <portfolio-project
        v-for="project in projectsInfo"
        :key="project.id"
        :thumbnailURL="project.imgUrl"
        :altMessage="project.altMessage"
        :headingText="project.headingText"
        :simpleDesc="project.simpleDesc"
        :linkURL="project.linkUrl"
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
  font-size: 2rem;
  font-weight: 300;
}
</style>

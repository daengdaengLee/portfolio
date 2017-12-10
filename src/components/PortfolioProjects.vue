<template>
  <section class="PortfolioProjects">
    <h2>Projcets</h2>
    <portfolio-thumbnails></portfolio-thumbnails>
  </section>
</template>

<script>
import PortfolioThumbnails from './PortfolioThumbnails';

export default {
  name: 'PortfolioProjects',
  components: {
    PortfolioThumbnails,
  },
};
</script>

<style scoped>
.PortfolioProjects {
  text-align: center;
}
</style>

<template>
  <section class="PortfolioProject">
    <a href="#" target="_blank" class="ProjectLink row">
      <div class="col-lg-5">
        <portfolio-project-thumbnail
          :thumbnailURL="thumbnailURL"
          :altMessage="altMessage"
        />
      </div>
      <div class="col-lg-7">
        <portfolio-project-text />
      </div>
    </a>
  </section>
</template>

<script>
import PortfolioProjectThumbnail from './PortfolioProjectThumbnail';
import PortfolioProjectText from './PortfolioProjectText';

export default {
  name: 'PortfolioProject',
  props: {
    thumbnailURL: { type: String, default() { return '#'; } },
    altMessage: { type: String, dafault() { return 'thumbnail image'; } },
  },
  components: {
    PortfolioProjectThumbnail,
    PortfolioProjectText,
  },
};
</script>

<style scoped>
.PortfolioProject {
  margin: 2rem;
  padding: 0 2rem;
  width: 500px;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);
}
.PortfolioProject:hover {
  opacity: 0.7;
}
.PortfolioProject .ProjectLink {
  text-decoration: none;
}
</style>

<template>
  <section class="PortfolioProject mx-4 my-5 px-4">
    <a :href="linkURL" target="_blank" class="ProjectLink row h-100">
      <div class="col-md-5">
        <portfolio-project-thumbnail
          :thumbnailURL="thumbnailURL"
          :altMessage="altMessage"
        />
      </div>
      <div class="col-md-7">
        <portfolio-project-text
          :headingText="headingText"
          :simpleDesc="simpleDesc"
        />
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
    altMessage: { type: String, default() { return 'thumbnail image'; } },
    headingText: { type: String, default() { return 'heading text'; } },
    simpleDesc: { type: String, default() { return 'project'; } },
    linkURL: { type: String, default() { return '#'; } },
  },
  components: {
    PortfolioProjectThumbnail,
    PortfolioProjectText,
  },
};
</script>

<style scoped>
.PortfolioProject {
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);
}
.PortfolioProject:hover {
  opacity: 0.7;
}
.PortfolioProject .ProjectLink {
  text-decoration: none;
}
</style>

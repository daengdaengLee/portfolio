<template>
  <img 
    :src="thumbnailURL"
    :alt="altMessage"
    class="PortfolioProjectThumbnail"
  >
</template>

<script>
export default {
  name: 'PortfolioProjectThumbanail',
  props: {
    thumbnailURL: { type: String, default() { return '#'; } },
    altMessage: { type: String, dafault() { return 'thumbnail image'; } },
  },
};
</script>


<style scoped>
.PortfolioProjectThumbnail {
  position: relative;
  width: 100%;
  box-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3), 10px 15px 12px rgba(80,80,80,0.22);
}
@media (min-width: 992px) {
  .PortfolioProjectThumbnail {
    top: -1rem;
  }
}
</style>

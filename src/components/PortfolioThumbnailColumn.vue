<template>
  <div class="PortfolioThumbnailColumn">
    <portfolio-thumbnail
      v-for="info in thumbnailsInfo"
      :key="info.id"
      :linkUrl="info.linkUrl"
      :imgUrl="info.imgUrl"
      :altMessage="info.altMessage"
      :headingText="info.headingText"
      :descripttionText="info.descripttionText"
    >
    </portfolio-thumbnail>
  </div>
</template>

<script>
import PortfolioThumbnail from './PortfolioThumbnail';

export default {
  name: 'PortfolioThumbnailColumn',
  props: {
    thumbnailsInfo: {
      type: Array,
      default() { return []; },
    },
  },
  components: {
    PortfolioThumbnail,
  },
};
</script>

<style scoped>
</style>

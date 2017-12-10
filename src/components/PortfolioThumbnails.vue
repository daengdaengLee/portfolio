<template>
  <div class="PortfolioThumbnails">
    <portfolio-thumbnail-column
      v-for="(infos, index) in thumbnailsInfo"
      :key="index"
      :thumbnails-info="infos"
    >
    </portfolio-thumbnail-column>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioThumbnailColumn from './PortfolioThumbnailColumn';

export default {
  name: 'PortfolioThumbnails',
  computed: mapState(['thumbnailsInfo']),
  components: {
    PortfolioThumbnailColumn,
  },
};
</script>

<style>
</style>

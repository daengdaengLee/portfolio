<template>
  <a :href="linkUrl" target="_blank" class="PortfolioThumbnail">
    <article>
      <img :src="imgUrl" :alt="altMessage">
      <h3>{{ headingText }}</h3>
      <p>{{ descripttionText }}</p>
    </article>
  </a>
</template>

<script>
export default {
  name: 'PortfolioThumbnail',
  props: {
    linkUrl: {
      type: String,
      default() { return '#'; },
    },
    imgUrl: {
      type: String,
      default() { return '#'; },
    },
    altMessage: {
      type: String,
      default() { return 'thumbnail image'; },
    },
    headingText: {
      type: String,
      default() { return 'Heading Text'; },
    },
    descripttionText: {
      type: String,
      default() { return 'Description Text'; },
    },
  },
};
</script>

<style scoped>
</style>

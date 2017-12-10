<template>
  <a :href="linkUrl" target="_blank" class="PortfolioThumbnail">
    <article class="ThumbnailArticle">
      <img :src="imgUrl" :alt="altMessage" class="ThumbnailImage">
      <h3 class="ThumbnailHeading">{{ headingText }}</h3>
      <p class="ThumbnailDesc">{{ descripttionText }}</p>
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
.PortfolioThumbnail {
  text-decoration: none;
  color: black;
  text-align: left;
  font-weight: 300;
  display: block;
  box-sizing: border-box;
  border: 1px solid darkgray;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
}
.PortfolioThumbnail .ThumbnailArticle .ThumbnailImage {
  width: 100%;
  border-radius: 0.3rem;
  border-bottom: 1px solid darkgray;
}
.PortfolioThumbnail .ThumbnailArticle .ThumbnailImage:hover {
  opacity: 0.7;
}
.PortfolioThumbnail .ThumbnailArticle .ThumbnailHeading {
  font-size: 1.4rem;
  padding: 0.5rem 0.5rem 0 0.5rem;
}
.PortfolioThumbnail .ThumbnailArticle .ThumbnailDesc {
  box-sizing: border-box;
  color: gray;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
}
</style>

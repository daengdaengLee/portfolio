<template>
  <section class="PortfolioCareer" v-html="content">
  </section>
</template>

<script>
export default {
  name: 'PortfolioCareer',
  props: {
    content: {
      type: String,
      default() { return 'career content'; },
    },
  },
};
</script>

<style scoped>
.PortfolioCareer {
  text-align: left;
  box-sizing: border-box;
  border: 1px solid darkgray;
  border-radius: 0.4rem;
  width: 80%;
  margin: 1rem 0;
  padding: 1rem;
  font-weight: 300;
  font-size: 2rem;
  line-height: 2.8rem;
}
</style>

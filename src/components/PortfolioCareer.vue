<template>
  <section class="PortfolioCareer">
    {{ content }}
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
  box-sizing: border-box;
  border: 1px solid darkgray;
  border-radius: 0.4rem;
  width: 80%;
}
</style>

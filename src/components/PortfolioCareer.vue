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

<style>
</style>

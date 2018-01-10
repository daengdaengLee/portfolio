<template>
  <section class="PortfolioAbout">
    <h2 class="HeadingText text-center py-3">About</h2>
    <about-me />
  </section>
</template>

<script>
import AboutMe from './AboutMe/AboutMe';

export default {
  name: 'PortflioAbout',
  components: {
    AboutMe,
  },
};
</script>

<style scoped>
.PortfolioAbout .HeadingText {
  font-size: 2rem;
  font-weight: 300;
}
</style>

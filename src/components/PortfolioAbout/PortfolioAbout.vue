<template>
  <section class="PortfolioAbout">
    <h2 class="HeadingText text-center py-3">About</h2>
    <about-me class="mb-5" />
    <skills />
  </section>
</template>

<script>
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';

export default {
  name: 'PortflioAbout',
  components: {
    AboutMe,
    Skills,
  },
};
</script>

<style scoped>
.PortfolioAbout .HeadingText {
  font-size: 2rem;
  font-weight: 300;
}
</style>

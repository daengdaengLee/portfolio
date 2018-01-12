<template>
  <section class="PortfolioAbout d-flex flex-column justify-content-center align-items-center">
    <h2 class="HeadingText text-center py-3">About</h2>
    <about-me class="my-5 w-75" />
    <skills class="mb-5 w-75" />
    <careers class="mb-5 w-75" />
  </section>
</template>

<script>
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Careers from './Careers/Careers';

export default {
  name: 'PortflioAbout',
  components: {
    AboutMe,
    Skills,
    Careers,
  },
};
</script>

<style scoped>
.PortfolioAbout .HeadingText {
  font-size: 2rem;
  font-weight: 300;
}
</style>

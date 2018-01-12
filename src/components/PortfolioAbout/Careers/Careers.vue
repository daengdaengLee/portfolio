<template>
  <section class="Careers p-5">
    <h3 class="HeadingText pb-4">Careers</h3>
    <Career />
  </section>
</template>

<script>
import Career from './Career/Career';

export default {
  name: 'Careers',
  components: {
    Career,
  },
};
</script>

<style scoped>
.Careers {
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);
}
.Careers .HeadingText {
  font-size: 1.4rem;
  font-weight: 300;
  color: gray;
}
</style>
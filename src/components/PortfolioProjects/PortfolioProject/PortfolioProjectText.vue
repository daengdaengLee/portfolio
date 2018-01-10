<template>
  <div class="PortfolioProjcetText">
    <h3 class="h3">{{headingText}}</h3>
    <p class="ProjectSimpleDesc">{{simpleDesc}}</p>
  </div>
</template>

<script>
export default {
  name: 'PortfolioProjcetText',
  props: {
    headingText: { type: String, default() { return 'heading text'; } },
    simpleDesc: { type: String, default() { return 'project'; } },
  },
};
</script>

<style scoped>
.PortfolioProjcetText {
  padding: 1.5rem;
  color: black;
}
.PortfolioProjcetText .ProjectSimpleDesc {
  font-size: 1.2rem;
  font-weight: 300;
  padding: 0.5rem 0;
}
</style>


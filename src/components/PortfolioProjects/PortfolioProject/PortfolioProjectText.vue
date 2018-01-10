<template>
  <div class="PortfolioProjcetText p-4">
    <h3 class="h3">{{headingText}}</h3>
    <p class="ProjectSimpleDesc py-2">{{simpleDesc}}</p>
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
  color: black;
}
.PortfolioProjcetText .ProjectSimpleDesc {
  font-size: 1.2rem;
  font-weight: 300;
}
</style>


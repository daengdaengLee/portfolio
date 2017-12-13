<template>
  <ul class="PortfolioMenu">
    <li @click="navigate('PortfolioProjects')">Projects</li>
    <li @click="navigate('PortfolioProjects')">Career</li>
    <li @click="navigate('PortfolioProjects')">Blog</li>
  </ul>
</template>

<script>
export default {
  name: 'PortfolioMenu',
  methods: {
    navigate(routeName) {
      const routeInfo = { name: routeName };
      this.$router.push(routeInfo);
    },
  },
};
</script>

<style scoped>
.PortfolioMenu {
  width: 100%;
  margin: 2rem;
  display: flex;
  justify-content: center;
}
.PortfolioMenu li {
  box-sizing: border-box;
  width: 26%;
  margin: 0 0.5rem;
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid darkgray;
  border-radius: 0.2rem;
  color: gray;
  font-size: 1rem;
  font-weight: 300;
}
.PortfolioMenu li:hover {
  background-color: darkgray;
  cursor: pointer;
  color: white;
}
@media (min-width: 768px) {
  .PortfolioMenu li {
    width: 7rem;
    font-size: 1.2rem;
  }
}
</style>

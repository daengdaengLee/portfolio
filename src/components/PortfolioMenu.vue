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
  margin: 2rem 0 2rem 0;
  text-align: center;
}
.PortfolioMenu li {
  box-sizing: border-box;
  display: inline-flex;
  width: 7rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  border: 1px solid darkgray;
  color: gray;
  font-size: 1.2rem;
  font-weight: 300;
}
.PortfolioMenu li:hover {
  background-color: darkgray;
  cursor: pointer;
  color: white;
}
</style>

<template>
  <ul class="PortfolioMenu">
    <li @click="navigate('PortfolioProjects', 'router')">Projects</li>
    <li @click="navigate('PortfolioProjects', 'router')">Career</li>
    <li @click="navigate('https://daengdaenglee.github.io', 'link')">Blog</li>
  </ul>
</template>

<script>
export default {
  name: 'PortfolioMenu',
  methods: {
    navigate(uri, type) {
      if (type === 'router') {
        this.$router.push({ name: uri });
      } else if (type === 'link') {
        window.open(uri, '_blank');
      }
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

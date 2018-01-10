<template>
  <ul class="PortfolioMenu row justify-content-center m-5">
    <li class="MenuItem mx-2 col-3 col-md-2" @click="navigate('PortfolioProjects', 'router')">
      <div class="h-100 d-flex justify-content-center align-items-center">
        Projects
      </div>
    </li>
    <li class="MenuItem mx-2 col-3 col-md-2" @click="navigate('PortfolioCareers', 'router')">
      <div class="h-100 d-flex justify-content-center align-items-center">
        Career
      </div>
    </li>
    <li class="MenuItem mx-2 col-3 col-md-2" @click="navigate('https://daengdaenglee.github.io', 'link')">
      <div class="h-100 d-flex justify-content-center align-items-center">
        Blog
      </div>
    </li>
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
.PortfolioMenu .MenuItem {
  height: 2rem;
  border: 1px solid darkgray;
  border-radius: 0.2rem;
  color: gray;
  font-size: 1rem;
  font-weight: 300;
}
.PortfolioMenu .MenuItem:hover {
  background-color: darkgray;
  cursor: pointer;
  color: white;
}
</style>

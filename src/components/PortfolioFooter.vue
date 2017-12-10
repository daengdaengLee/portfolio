<template>
  <footer class="PortfolioFooter">
    <p>
      Coded by <a :href="userUrl" target="_blank">KunhoLee</a>.
      You can see the code from <a :href="codeRepoUrl" target="_blank">here</a>!
    </p>
  </footer>
</template>

<script>
export default {
  name: 'PortfolioFooter',
  props: {
    userUrl: {
      type: String,
      default() { return '#'; },
    },
    codeRepoUrl: {
      type: String,
      default() { return '#'; },
    },
  },
};
</script>

<style scoped>
.PortfolioFooter::before {
  content: '';
  display: block;
  width: 10rem;
  margin: 2rem auto;
  border-top: 1px solid gray;
  margin-bottom: 3rem;
}
.PortfolioFooter {
  padding-bottom: 3rem;
}
.PortfolioFooter p {
  text-align: center;
  font-weight: 300;
  font-size: 1.2rem;
}
.PortfolioFooter p a {
  text-decoration: none;
  color: gray;
}
.PortfolioFooter p a:hover {
  color: darkgray;
}
</style>

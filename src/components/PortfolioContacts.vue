<template>
  <ul class="PortfolioContacts">
    <li><a :href="githubAddress" class="icon-github" target="_blank"><span class="label">Github</span></a></li>
    <li><a :href="facebookAddress" class="icon-facebook" target="_blank"><span class="label">Facebook</span></a></li>
    <li><a :href="codepenAddress" class="icon-codepen" target="_blank"><span class="label">Codepen</span></a></li>
    <li><a :href="'mailto: '+mailAddress" class="icon-mail" target="_blank"><span class="label">Email</span></a></li>
  </ul>
</template>

<script>
export default {
  name: 'portfolio-contacts',
  props: {
    githubAddress: {
      type: String,
      default() { return '#'; },
    },
    facebookAddress: {
      type: String,
      default() { return '#'; },
    },
    codepenAddress: {
      type: String,
      default() { return '#'; },
    },
    mailAddress: {
      type: String,
      default() { return '#'; },
    },
  },
};
</script>

<style scoped>
.PortfolioContacts {
  margin: 2rem 0 2rem 0;
  text-align: center;
}
.PortfolioContacts li {
  display: inline-block;
  border: 1px solid darkgray;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  margin-right: 0.7rem;
  margin-left:  0.7rem;
}
.PortfolioContacts li:hover {
  background-color: darkgray;
  cursor: pointer;
}
.PortfolioContacts li .label {
  display: none;
}
.PortfolioContacts li a {
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: gray;
  text-decoration: none;
}
.PortfolioContacts li a:hover {
  color: white;
}
</style>

<template>
  <ul class="PortfolioContacts">
    <li><a :href="snsContacts.githubAddress" class="icon-github" target="_blank"><span class="label">Github</span></a></li>
    <li><a :href="snsContacts.facebookAddress" class="icon-facebook" target="_blank"><span class="label">Facebook</span></a></li>
    <li><a :href="snsContacts.codepenAddress" class="icon-codepen" target="_blank"><span class="label">Codepen</span></a></li>
    <li><a :href="'mailto: ' + snsContacts.mailAddress" class="icon-mail" target="_blank"><span class="label">Email</span></a></li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'portfolio-contacts',
  computed: mapState(['snsContacts']),
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

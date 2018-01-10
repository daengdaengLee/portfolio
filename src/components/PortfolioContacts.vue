<template>
  <div class="d-flex justify-content-center">
    <ul class="PortfolioContacts list-inline">
      <li class="list-inline-item IconMargin">
        <a :href="snsContacts.githubAddress" class="icon-github" target="_blank">
          <span class="label">Github</span>
        </a>
      </li>
      <li class="list-inline-item IconMargin">
        <a :href="snsContacts.facebookAddress" class="icon-facebook" target="_blank">
          <span class="label">Facebook</span>
        </a>
      </li>
      <li class="list-inline-item IconMargin">
        <a :href="snsContacts.codepenAddress" class="icon-codepen" target="_blank">
          <span class="label">Codepen</span>
        </a>
      </li>
      <li class="list-inline-item">
        <a :href="'mailto: ' + snsContacts.mailAddress" class="icon-mail" target="_blank">
          <span class="label">Email</span>
        </a>
      </li>
    </ul>
  </div>
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
}
.PortfolioContacts .IconMargin {
  margin-right: 1rem;
}
.PortfolioContacts .list-inline-item {
  border: 1px solid darkgray;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
}
.PortfolioContacts .list-inline-item:hover {
  background-color: darkgray;
  cursor: pointer;
}
.PortfolioContacts .list-inline-item .label {
  display: none;
}
.PortfolioContacts .list-inline-item a {
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: gray;
  text-decoration: none;
}
.PortfolioContacts .list-inline-item a:hover {
  color: white;
}
</style>

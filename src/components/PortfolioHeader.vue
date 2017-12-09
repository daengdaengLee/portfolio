<template>
  <header class="PortfolioHeader">
    <h1>PortfolioHeader</h1>
    <portfolio-contacts
      :githubAddress="snsContacts.githubAddress"
      :facebookAddress="snsContacts.facebookAddress"
      :codepenAddress="snsContacts.codepenAddress"
      :mailAddress="snsContacts.mailAddress"
    ></portfolio-contacts>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioContacts from './PortfolioContacts';

export default {
  name: 'PortfolioHeader',
  computed: mapState(['snsContacts']),
  components: {
    PortfolioContacts,
  },
};
</script>

<style>
</style>

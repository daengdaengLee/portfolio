<template>
  <header class="PortfolioHeader">
    <portfolio-avatar :img-url="imgUrl"></portfolio-avatar>
    <h1>
      Hi, I'm <strong>Kunho Lee</strong>.<br>
      Are you looking for a <strong>web developer</strong>? PICK ME!
    </h1>
    <portfolio-contacts
      :githubAddress="snsContacts.githubAddress"
      :facebookAddress="snsContacts.facebookAddress"
      :codepenAddress="snsContacts.codepenAddress"
      :mailAddress="snsContacts.mailAddress"
    >
    </portfolio-contacts>
    <portfolio-menu></portfolio-menu>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioContacts from './PortfolioContacts';
import PortfolioAvatar from './PortfolioAvatar';
import PortfolioMenu from './PortfolioMenu';

export default {
  name: 'PortfolioHeader',
  computed: mapState(['snsContacts', 'imgUrl']),
  components: {
    PortfolioContacts,
    PortfolioAvatar,
    PortfolioMenu,
  },
};
</script>

<style scoped>
.PortfolioHeader {
  text-align: center;
  padding: 2rem 0 2rem 0;
}
.PortfolioHeader h1 {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 3rem;
  line-height: 2.3rem;
}
.PortfolioHeader h1 strong {
  color: gray;
}
</style>

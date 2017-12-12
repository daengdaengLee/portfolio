<template>
  <header class="PortfolioHeader">
    <portfolio-avatar :img-url="avatarImgUrl"></portfolio-avatar>
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
  computed: mapState(['snsContacts', 'avatarImgUrl']),
  components: {
    PortfolioContacts,
    PortfolioAvatar,
    PortfolioMenu,
  },
};
</script>

<style scoped>
.PortfolioHeader {
  width: 100%;
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.PortfolioHeader h1 {
  font-size: 1.8rem;
  font-weight: 300;
  margin: 0 2rem 3rem 2rem;
  line-height: 2.3rem;
}
.PortfolioHeader h1 strong {
  color: gray;
}
</style>

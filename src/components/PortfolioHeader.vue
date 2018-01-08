<template>
  <header class="PortfolioHeader">
    <portfolio-avatar></portfolio-avatar>
    <h1 class="d-flex justify-content-center">
      <span class="HeadingText">
        Hi, I'm <strong class="HeadingStrong">Kunho Lee</strong>.<br>
        Are you looking for a <strong class="HeadingStrong">web developer</strong>? PICK ME!
      </span>
    </h1>
    <portfolio-contacts></portfolio-contacts>
    <portfolio-menu></portfolio-menu>
  </header>
</template>

<script>
import PortfolioContacts from './PortfolioContacts';
import PortfolioAvatar from './PortfolioAvatar';
import PortfolioMenu from './PortfolioMenu';

export default {
  name: 'PortfolioHeader',
  components: {
    PortfolioContacts,
    PortfolioAvatar,
    PortfolioMenu,
  },
};
</script>

<style scoped>
.PortfolioHeader {
  padding: 2rem 0 2rem 0;
}
.PortfolioHeader .HeadingText {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.3rem;
}
.PortfolioHeader .HeadingText .HeadingStrong {
  color: gray;
}
</style>

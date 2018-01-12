<template>
  <header class="PortfolioHeader py-4">
    <portfolio-avatar></portfolio-avatar>
    <portfolio-heading-text></portfolio-heading-text>
    <portfolio-contacts></portfolio-contacts>
    <portfolio-menu></portfolio-menu>
  </header>
</template>

<script>
import PortfolioHeadingText from './PortfolioHeadingText/PortfolioHeadingText';
import PortfolioContacts from './PortfolioContacts/PortfolioContacts';
import PortfolioAvatar from './PortfolioAvatar/PortfolioAvatar';
import PortfolioMenu from './PortfolioMenu/PortfolioMenu';

export default {
  name: 'PortfolioHeader',
  components: {
    PortfolioHeadingText,
    PortfolioContacts,
    PortfolioAvatar,
    PortfolioMenu,
  },
};
</script>

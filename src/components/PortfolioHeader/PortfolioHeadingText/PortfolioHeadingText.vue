<template>
  <h1 class="PortfolioHeadingText d-flex justify-content-center">
    <span class="HeadingText">
      Hi, I'm <strong class="HeadingStrong">Kunho Lee</strong>.<br>
      Are you looking for a <strong class="HeadingStrong">web developer</strong>? PICK ME!
    </span>
  </h1>
</template>

<script>
export default {
  name: 'PortfolioHeadingText',
};
</script>

<style scoped>
.PortfolioHeadingText .HeadingText {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.3rem;
}
.PortfolioHeadingText .HeadingText .HeadingStrong {
  color: gray;
}
</style>


<template>
  <span class="PortfolioAvatar">
    <img :src="imgUrl" alt="프로필 이미지">
  </span>
</template>

<script>
export default {
  name: 'PortfolioAvatar',
  props: {
    imgUrl: {
      type: String,
      default() { return '#'; },
    },
  },
};
</script>

<style scoped>
.PortfolioAvatar {
  display: inline-block;
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  width: 12rem;
  height: 12rem;
  margin: 1.5rem;
}
.PortfolioAvatar img {
  border-radius: 100%;
  width: 100%;
}
</style>

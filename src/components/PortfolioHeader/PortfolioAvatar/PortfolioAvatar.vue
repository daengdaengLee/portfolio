<template>
  <div class="PortfolioAvatar d-flex justify-content-center">
    <span class="AvatarImage p-2 m-4 rounded-circle">
      <img :src="avatarImgUrl" alt="프로필 이미지" class="rounded-circle">
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'PortfolioAvatar',
  computed: mapState(['avatarImgUrl']),
};
</script>

<style scoped>
.PortfolioAvatar .AvatarImage {
  border: 1px solid gray;
  background-color: rgba(0, 0, 0, 0.05);
  width: 12rem;
  height: 12rem;
}
.PortfolioAvatar .AvatarImage img {
  width: 100%;
}
</style>

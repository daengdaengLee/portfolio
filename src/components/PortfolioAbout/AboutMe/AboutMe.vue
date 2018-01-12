<template>
  <section class="AboutMe p-5">
    <h3 class="HeadingText pb-4">About Me</h3>
    <p class="MainText">안녕하세요. 저는 웹 개발 꿈나무입니다.</p>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
.AboutMe {
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);
}
.AboutMe .HeadingText {
  font-size: 1.4rem;
  font-weight: 300;
  color: gray;
}
.AboutMe .MainText {
  font-size: 1.2rem;
  font-weight: 300;
}
</style>

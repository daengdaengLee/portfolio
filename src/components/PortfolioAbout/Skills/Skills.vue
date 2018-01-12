<template>
  <section class="Skills p-5">
    <h3 class="HeadingText pb-4">Skills</h3>
    <dl class="MainText row">
      <dt class="col-sm-4 font-weight-normal my-3">
        Web Front End
      </dt>
      <dd class="col-sm-8 my-3">
        HTML, CSS, JavaScript, jQuery, React.js, Vue.js
      </dd>
      <dt class="col-sm-4 font-weight-normal my-3">
        Web Back End
      </dt>
      <dd class="col-sm-8 my-3">
        Node.js, Express.js, Python, Django, Java
      </dd>
    </dl>
  </section>
</template>

<script>
export default {
  name: 'Skills',
};
</script>

<style scoped>
.Skills {
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);
}
.Skills .HeadingText {
  font-size: 1.4rem;
  font-weight: 300;
  color: gray;
}
.Skills .MainText {
  font-size: 1.2rem;
  font-weight: 300;
}
</style>
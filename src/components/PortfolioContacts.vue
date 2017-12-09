<template>
  <ul class="Icons">
    <li><a :href="githubAddress" class="icon-github"><span class="label">Github</span></a></li>
    <li><a :href="facebookAddress" class="icon-facebook"><span class="label">Facebook</span></a></li>
    <li><a :href="codepenAddress" class="icon-codepen"><span class="label">Codepen</span></a></li>
    <li><a :href="mailAddress" class="icon-mail"><span class="label">Email</span></a></li>
  </ul>
</template>

<script>
export default {
  name: 'portfolio-contacts',
  props: {
    githubAddress: {
      type: String,
      default() { return '#'; },
    },
    facebookAddress: {
      type: String,
      default() { return '#'; },
    },
    codepenAddress: {
      type: String,
      default() { return '#'; },
    },
    mailAddress: {
      type: String,
      default() { return '#'; },
    },
  },
};
</script>

<style scoped>
.Icons li {
  display: inline-block;
  border: 1px solid darkgray;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.7rem;
  margin-left:  0.7rem;
}
.Icons li:hover {
  background-color: darkgray;
  color: darkgray;
  border-color: darkgray;
  cursor: pointer;
}
.Icons li .label {
  display: none;
}
.Icons li a {
  color: gray;
  text-decoration: none;
}
</style>

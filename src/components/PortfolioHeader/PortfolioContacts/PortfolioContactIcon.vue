<template>
  <a
    :href="linkURL"
    :class="myStyle"
    target="_blank"
    class="PortfolioContactIcon w-100 h-100 d-inline-flex justify-content-center align-items-center"
  >
    <span class="label">{{iconText}}</span>
  </a>
</template>

<script>
export default {
  name: 'PortfolioContactIcon',
  props: {
    iconClass: {
      type: String,
      default() { return 'none'; },
    },
    iconText: {
      type: String,
      default() { return 'contact icon'; },
    },
    linkURL: {
      type: String,
      default() { return '#'; },
    },
  },
  data() {
    return {
      myStyle: {},
    };
  },
  beforeMount() {
    this.myStyle = {
      [this.iconClass]: true,
    };
  },
};
</script>


<style scoped>
.PortfolioContactIcon {
  color: gray;
  text-decoration: none;
}
.PortfolioContactIcon:hover {
  color: white;
}
.PortfolioContactIcon .label {
  display: none;
}
</style>

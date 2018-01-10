<template>
  <a :href="linkURL" :class="myStyle" target="_blank">
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
      PortfolioContactIcon: true,
    };
  },
};
</script>


<style scoped>
.PortfolioContactIcon {
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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

<template>
  <div class="PortfolioContacts d-flex justify-content-center my-5">
    <ul class="list-inline">
      <li class="list-inline-item mr-3 rounded-circle IconList">
        <PortfolioContactIcon
          :iconClass="snsContacts.github.iconClass"
          :iconText="snsContacts.github.iconText"
          :linkURL="snsContacts.github.address"
        >
        </PortfolioContactIcon>
      </li>
      <li class="list-inline-item mr-3 rounded-circle IconList">
        <PortfolioContactIcon
          :iconClass="snsContacts.facebook.iconClass"
          :iconText="snsContacts.facebook.iconText"
          :linkURL="snsContacts.facebook.address"
        >
        </PortfolioContactIcon>
      </li>
      <li class="list-inline-item mr-3 rounded-circle IconList">
        <PortfolioContactIcon
          :iconClass="snsContacts.codepen.iconClass"
          :iconText="snsContacts.codepen.iconText"
          :linkURL="snsContacts.codepen.address"
        >
        </PortfolioContactIcon>
      </li>
      <li class="list-inline-item rounded-circle IconList">
        <PortfolioContactIcon
          :iconClass="snsContacts.mail.iconClass"
          :iconText="snsContacts.mail.iconText"
          :linkURL="snsContacts.mail.address"
        >
        </PortfolioContactIcon>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PortfolioContactIcon from './PortfolioContactIcon';

export default {
  name: 'portfolio-contacts',
  computed: mapState(['snsContacts']),
  components: {
    PortfolioContactIcon,
  },
};
</script>

<style scoped>
.PortfolioContacts .IconList {
  border: 1px solid darkgray;
  width: 2rem;
  height: 2rem;
}
.PortfolioContacts .IconList:hover {
  background-color: darkgray;
  cursor: pointer;
}
</style>

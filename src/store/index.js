import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  actions,
});

export default store;

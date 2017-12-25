import Constant from '../assets/js/Constant';

export default {
  [Constant('CHANGE_VIEW')]: (state, payload) => {
    const storeState = state;
    storeState.currentView = payload.name;
  },
};

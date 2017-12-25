import Constant from '../assets/js/Constant';

export default {
  [Constant('CHANGE_VIEW')]: (store, payload) => {
    store.commit(Constant('CHANGE_VIEW'), payload);
  },
};

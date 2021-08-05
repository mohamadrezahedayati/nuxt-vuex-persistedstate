import { Store } from 'vuex';

const store = () => new Store({
  state: {
    text: 'sss'
  },
  mutations: {
    myTypeText(state, text) {
      state.text = text;
    },
  },
});


export default store;
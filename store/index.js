import { Store } from 'vuex';

// const store = () => new Store({
//   state: {
//     counter: 0
//   },
//   mutations: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     }
//   },
// });


// export default store;

import strinng from './strinng'
// import drugSelection from './drugSelection'
// import drugSpecification from './drugSpecification'
// import patient from './patient'
// import signin from './signin'
// import signup from './signup'
// import visitNote from './visitNote'
// import imagingSelection from './imagingSelection'


export const store = new Store({
  modules: {
    strinng
  }
})

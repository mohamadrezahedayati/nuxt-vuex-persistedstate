import Vue from 'vue'

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  }
}

export const actions = {

}

export default ({
  namespaced: true,
  state,
  mutations,
  actions
})

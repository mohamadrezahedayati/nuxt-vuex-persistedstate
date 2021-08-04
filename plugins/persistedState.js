// ~/plugins/persistedState.client.js

import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'yourkey',
  })(store)
}
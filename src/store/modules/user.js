// initial state
const state = {
    userInfo: {
      username: "",
      email: "",
    },
    login: false,
}

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  setUserInfo (state, payload) {
    state.userInfo.username = payload.username;
    state.userInfo.email = payload.email;
  },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


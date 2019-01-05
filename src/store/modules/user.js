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
  UPDATE_USER_INFO (state, payload) {
    state.userInfo.username = payload.username;
    state.userInfo.email = payload.email;
  },
}

export default {
    namespaced: true, // 调用
    state,
    getters,
    actions,
    mutations
}


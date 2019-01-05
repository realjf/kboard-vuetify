// initial state
const state = {
    module: "",
    action: "",
}

// getters
const getters = {}

// actions
const actions = {

}

// mutations
const mutations = {
  UPDATE_BREAD_CRUMB (state, payload) {
    state.module = payload.module;
    state.action = payload.action;
  },
}

export default {
  namespaced: true, // 调用使用命名空间 default/xxxx
  state,
  getters,
  actions,
  mutations
}




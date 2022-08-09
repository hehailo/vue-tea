const TOKEN_KEY = "USERINFO_TEA";

// state
const state = {
  // lognToken: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
  userInfo: null,
};

// getters
const getters = {};

// mutations
const mutations = {
  saveUserInfo(stat,userInfo) {
    state.userInfo = userInfo;
  },
};

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isDarkMode: true
}

const getters = {
  isDarkMode(state) {
    return state.isDarkMode
  }
}

const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false
      document.body.style.backgroundColor = '#f0f3f5'
    } else {
      state.isDarkMode = true
      document.body.style.backgroundColor = '#212c4f'
    }
  }
}

const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
})

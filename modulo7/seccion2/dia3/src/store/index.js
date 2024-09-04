import { createStore } from 'vuex'
import juegos from '../db/juegos.json'

export default createStore({
  state: {
    juegos
  },
  getters: {
  },
  mutations: {
    setGames(state, payload) {
      state.juegos = payload
    }
  },
  actions: {
    incrementar(context, i) {
      context.state.juegos[i].stock++
      context.commit('setGames', context.state.juegos)
    },

    decrementar(context, i) {
      context.state.juegos[i].stock--
      context.commit('setGames', context.state.juegos)
    }
  },
  modules: {
  }
})

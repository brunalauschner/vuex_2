import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    caixinhas: [
        { titulo: "Estudar"},
        { titulo: "Jogar"}
    ]
  },
  mutations: {
      addCaixa(state, texto){
        state.caixinhas.push({titulo: texto.titulo})
      }
  },
  actions: {
  },
  modules: {
  }
})

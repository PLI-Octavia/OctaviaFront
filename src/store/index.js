import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import game from './modules/game'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const store = new Vuex.Store({
  modules: {
    users,
    game
  }
})
export default store

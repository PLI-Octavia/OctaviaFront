import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import game from './modules/game'
import topic from './modules/topic'
import schoolclass from './modules/schoolclass'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const store = new Vuex.Store({
  modules: {
    users,
    game,
    topic,
    schoolclass
  }
})
export default store

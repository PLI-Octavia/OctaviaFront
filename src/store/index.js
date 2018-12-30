import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  // In store set all module we get
  const store = new Vuex.Store({
    modules: {
      users
    }
  })

  return store
}

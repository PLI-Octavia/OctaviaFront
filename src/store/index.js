import Vue from 'vue'
import Vuex from 'vuex'
import { Cookies } from 'quasar'

import users from './modules/users'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const store = new Vuex.Store({
  modules: {
    users
  },
  mounted () {
    console.log('yeahhhh')
    if (Cookies.get('isAuth') === undefined) {
      console.log('not log')
    }
  }
})
export default store

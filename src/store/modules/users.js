import Axios, * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
import { Notify, Cookies } from 'quasar'
// import Vue from 'vue'

const state = {
  auth_user: {},
  isLogged: false
}

const getters = {
  isLogged: (state) => {
    return state.isLogged
  },
  currentUser: (state, rootState) => {
    if (!state.isLogged) {
      return null
    }
    return state.auth_user
  }
}

const mutations = {
  [mutationTypes.SET_AUTHUSER] (state, {token, user}) {
    user.token = token
    if (user.avatar_source === null) {
      user.avatar_source = 'https://avatars2.githubusercontent.com/u/6086592?s=460&v=4'
    }
    state.auth_user = user
    state.isLogged = true
  },
  [mutationTypes.LOGOUT_USER] (state) {
    state.auth_user = null
    state.isLogged = false
    Cookies.remove('isLogged')
    this.$router.push({ path: '/login' })
  }
}

const actions = {
  async [actionTypes.FETCH_USER] (store, token) {
    Axios.defaults.headers.common['Authorization'] = token
    const details = await $http.post('/details')
    // On récupe toutes les infos de ce user
    await store.commit(mutationTypes.SET_AUTHUSER, {token: token, user: details.data.success})
    Cookies.set('isLogged', token, {
      expires: 1
    })
    this.$router.push({ path: '/dashboard' })
  },
  async [actionTypes.LOGIN_USER] (store, user) {
    try {
      const response = await $http.post('/login', user)
      // on crée le token passport
      const token = 'Bearer ' + response.data.success.token
      // On ajoute le token dans le header axios
      await store.dispatch(actionTypes.FETCH_USER, token)
    } catch (e) {
      Notify.create({
        message: 'Mauvais mail ou mot de passe'
      })
    }
  },
  async [actionTypes.REGISTER_USER] (store, user) {
    try {
      const response = await $http.post('/register', user)
      const token = 'Bearer ' + response.data.success.token
      await store.dispatch(actionTypes.FETCH_USER, token)
    } catch (e) {
      console.log(e)
    }
  },
  [actionTypes.LOGOUT_USER] (store) {
    store.commit(mutationTypes.LOGOUT_USER)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

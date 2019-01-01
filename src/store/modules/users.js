import Axios, * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
import { Notify } from 'quasar'
// import Vue from 'vue'

const state = {
  users: [],
  auth_user: {},
  isLogged: false
}

const getters = {
  isLogged: (state) => {
    return state.isAuth
  }
}

const mutations = {
  [mutationTypes.SET_USERS] (state, users) {
    for (let user of users) {
      state.users.push(user)
    }
  },
  [mutationTypes.SET_AUTHUSER] (state, {token, user}) {
    user.token = token
    state.auth_user = user
    state.isLogged = true
  }
}

const actions = {
  async [actionTypes.FETCH_USERS] (store) {
    const response = await $http.get('/users')
    store.commit(mutationTypes.SET_USERS, response.data.data)
  },
  async [actionTypes.LOGIN_USER] (store, user) {
    const response = await $http.post('/login', null, { params: { email: user.email, password: user.password } })
    if (response.data.success) {
      const token = 'Bearer ' + response.data.success.token
      // On ajoute le token dans le header axios
      Axios.defaults.headers.common['Authorization'] = token
      // On récupe toutes les infos de ce user
      const details = await $http.post('/details')
      store.commit(mutationTypes.SET_AUTHUSER, {token: token, user: details.data.success})
      this.$router.push({name: 'Home'})
    } else {
      Notify.create({
        message: 'Mauvais mail ou mot de passe'
      })
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

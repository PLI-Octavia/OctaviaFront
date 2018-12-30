import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import Vue from 'vue'

const state = {
  users: [],
  auth_user: {}
}

const getters = {
  isLogged: (state) => {
    return false
  }
}

const mutations = {
  [mutationTypes.SET_USERS] (state, users) {
    for (let user of users) {
      state.users.push(user)
    }
  }
}

const actions = {
  async [actionTypes.FETCH_USERS] (store) {
    const response = await $http.get('/users')
    store.commit(mutationTypes.SET_USERS, response.data.data)
  },
  async [actionTypes.LOGIN_USER] (store) {
    const response = await $http.post('/login', null, { params: { email: 'vasax.levy@gmail.com', password: 'xN74*hcBC' } })
    console.log(response.data)
    // store.commit(mutationTypes.SET_USERS, response.data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

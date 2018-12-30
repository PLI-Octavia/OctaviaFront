import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import Vue from 'vue'

const state = {
  users: []
}

const getters = {

}

const mutations = {
  [mutationTypes.SET_USERS] (state, users) {
    for (let user of users) {
      state.users.push(user)
    }
    // state.users.push(users)
  }
}

const actions = {
  async [actionTypes.FETCH_USERS] (store) {
    const response = await $http.get('/users')
    store.commit(mutationTypes.SET_USERS, response.data.data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import { Notify } from 'quasar'
// import Vue from 'vue'

const state = {
  schoolClass: []
}

const getters = {
  getClass: (state) => {
    return state.schoolClass
  }
}

const mutations = {
  async [mutationTypes.SET_SCHOOLCLASS] (state, schoolClass) {
    state.schoolClass = schoolClass
  }
}
const actions = {
  async [actionTypes.FETCH_SCHOOLCLASS] (store) {
    const result = await $http.get('/schoolclass')
    await store.commit(mutationTypes.SET_SCHOOLCLASS, result.data.success)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

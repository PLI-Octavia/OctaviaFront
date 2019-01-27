import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import { Notify } from 'quasar'
// import Vue from 'vue'

const state = {
  topics: []
}

const getters = {
  getTopics: (state) => {
    const filter = state.topics
    filter.push({'value': 0, 'label': 'Choisir une matière'})
    return filter.sort((p1, p2) => p1.value > p2.value ? 1 : -1)
  }
}

const mutations = {
  async [mutationTypes.SET_TOPICS] (state, topics) {
    state.topics = topics
  }
}
const actions = {
  async [actionTypes.FETCH_TOPICS] (store, token) {
    const details = await $http.get('/topics')
    await store.commit(mutationTypes.SET_TOPICS, details.data.success)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

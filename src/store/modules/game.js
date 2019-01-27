import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import { Notify } from 'quasar'
// import Vue from 'vue'

const state = {
  games: []
}

const getters = {
  getGames: (state) => {
    return state.games
  },
  getGamesFilterByTopic: (state) => (filter) => {
    if (filter === 0) {
      return state.games
    } else {
      return state.games.filter(game => game.topic.id_topic === filter)
    }
  }
}

const mutations = {
  async [mutationTypes.SET_GAMES] (state, games) {
    state.games = games
  }
}
const actions = {
  async [actionTypes.FETCH_GAMES] (store, token) {
    const details = await $http.get('/games')
    await store.commit(mutationTypes.SET_GAMES, details.data.success)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

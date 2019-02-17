import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import { Notify } from 'quasar'
// import Vue from 'vue'

const state = {
  games: [],
  game: {}
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
  },
  getGameById: (state) => {
    return {...state.game}
  }
}

const mutations = {
  async [mutationTypes.SET_GAMES] (state, games) {
    state.games = games
  },
  async [mutationTypes.GET_GAME_DETAIL] (state, game) {
    state.game = game
  }
}
const actions = {
  async [actionTypes.FETCH_GAMES] (store) {
    const details = await $http.get('/games')
    await store.commit(mutationTypes.SET_GAMES, details.data.success)
  },
  async [actionTypes.GAME_DETAIL] (store, gameId) {
    const game = await $http.get('/games/' + gameId)
    await store.commit(mutationTypes.GET_GAME_DETAIL, game.data.success)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

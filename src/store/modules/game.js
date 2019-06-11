import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'

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
  },
  getGameById: (state) => (gameId) => {
    if (!gameId || gameId <= 0) {
      return null
    }
    return state.games.find(g => g.id === gameId)
  },
  getTemplateById: (state) => ({ gameId, templateId }) => {
    const game = state.games.find(g => g.id === gameId)

    if (game) {
      return game.templates.find(t => t.id === templateId)
    }
    return null
  }
}

const mutations = {
  async [mutationTypes.SET_GAMES] (state, games) {
    state.games = games
  }
}
const actions = {
  async [actionTypes.FETCH_GAMES] (store) {
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

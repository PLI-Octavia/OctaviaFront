import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import { Notify } from 'quasar'
// import Vue from 'vue'

const state = {
  games: {},
  nextPageUrl: ''
}

const getters = {
  getGames: (state) => {
    return state.games
  }
}

const mutations = {
  async [mutationTypes.SET_GAMES] (state, games) {
    state.games = games.data
    state.nextPageUrl = games.next_page_url
  }
}
const actions = {
  async [actionTypes.FETCH_GAMES] (store, token) {
    const details = await $http.get('/games')
    console.log(details.data.data)
    await store.commit(mutationTypes.SET_GAMES, details.data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

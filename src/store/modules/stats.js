import * as $http from 'axios'
// import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'

const state = {
}

const getters = {
}

const mutations = {
}
const actions = {
  async [actionTypes.SEND_GAME_SCORE] (store, { score, gameId, childId, templateId }) {
    const result = await $http.post('/stat/score/add', {
      score: score,
      gameId: gameId,
      childId: childId,
      templateId: templateId
    })
    console.log(result)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

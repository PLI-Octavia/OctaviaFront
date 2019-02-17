import * as $http from 'axios'
import mutationTypes from '../mutationTypes'
import actionTypes from '../actionTypes'
// import { Notify } from 'quasar'
// import Vue from 'vue'

const state = {
  schoolClass: []
}

const getters = {
  getSchoolClass: (state) => {
    let schoolClasses = []
    const allClass = state.schoolClass
    allClass.forEach(function (schollClass) {
      schoolClasses.push({'value': schollClass.id, 'label': schollClass.class_name})
    })
    schoolClasses.push({'value': 0, 'label': 'Dans quelle classe est votre enfant'})
    return schoolClasses.sort((p1, p2) => p1.value > p2.value ? 1 : -1)
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

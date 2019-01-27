<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { Cookies } from 'quasar'
import axios from 'axios'
import $config from './config'
import actionTypes from './store/actionTypes'

export default {
  name: 'App',
  async beforeCreate () {
    axios.defaults.baseURL = $config.baseURL
    axios.defaults.responseType = 'json'
    axios.defaults.headers.common['Cache-Control'] = 'no-cache'
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
    if (Cookies.has('isLogged')) {
      await this.$store.dispatch(actionTypes.FETCH_USER, Cookies.get('isLogged'))
    }
  },
  async mounted () {
  }
}
</script>

<style>
</style>

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import $config from './config'

export default {
  name: 'App',
  mounted () {
    axios.defaults.baseURL = $config.baseURL
    axios.defaults.responseType = 'json'
    axios.defaults.headers.common['Cache-Control'] = 'no-cache'
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data'
  }
}
</script>

<style>
</style>

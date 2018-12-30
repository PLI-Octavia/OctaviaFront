<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    <q-btn label="New item" @click.prevent='click'/>
  </q-page>
</template>

<style>
</style>

<script>
import actionTypes from 'src/store/actionTypes'

export default {
  name: 'PageIndex',
  methods: {
    async click () {
      await this.$store.dispatch(actionTypes.FETCH_USERS)
    }
  }
}
</script>

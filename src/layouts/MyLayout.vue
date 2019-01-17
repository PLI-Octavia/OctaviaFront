<template>
  <q-layout>
    <toolbar></toolbar>
    <menuLeft></menuLeft>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import toolbar from '../components/Toolbar.vue'
import menuLeft from '../components/Menu/MenuLeft.vue'

export default {
  name: 'MyLayout',
  components: {
    toolbar,
    menuLeft
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

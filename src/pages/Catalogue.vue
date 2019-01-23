<template>
  <div>
    <q-card v-for="game in getGames"
       :key="game.id" :class="$style.card" inline color="secondary" dark class="q-ma-sm">
      <q-card-title>
        {{ game.name }}
        <span slot="subtitle">{{ game.topic_id }}</span>
      </q-card-title>
      <q-card-main>
        {{ game.description }}
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat>Voir</q-btn>
        <q-btn flat>Activer</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
// import actionTypes from '../store/actionTypes'

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getGames'])
  }
}
</script>

<style lang="stylus" module>
.card
  width 300px
  height 200px
</style>

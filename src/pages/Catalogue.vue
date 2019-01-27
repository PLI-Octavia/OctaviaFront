<template>
<div>
  <div :class="$style.filter">
    <q-select
        color="pink"
        v-model="select"
        inverted
        :options="getTopics"
        @input="getFilterGame"
      />
  </div>
  <div>
    <q-card v-for="game in this.games" :key="game.id" :class="$style.card" inline class="q-ma-sm">
      <q-card-media overlay-position="top">
        <img :src="'http://www.facetheforce.today/random/200?r=' + game.id">

        <q-card-title slot="overlay">
          {{ game.name }}
          <span slot="subtitle">{{ game.topic.name }}</span>
        </q-card-title>
      </q-card-media>
    </q-card>

    <!-- <q-card v-for="game in this.games" :key="game.id" :class="$style.card" inline color="secondary" dark class="q-ma-sm">
      <q-card-title>
        {{ game.name }}
        <span slot="subtitle">{{ game.topic.name }}</span>
      </q-card-title>
      <q-card-main>
        {{ game.description }}
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat>Voir</q-btn>
        <q-btn flat>Activer</q-btn>
      </q-card-actions>
    </q-card> -->
  </div>
</div>
</template>

<script>
// import actionTypes from '../store/actionTypes'

import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      select: 0,
      games: null
    }
  },
  computed: {
    ...mapGetters(['getTopics'])
  },
  mounted () {
    this.games = this.$store.getters.getGames
  },
  methods: {
    async getFilterGame () {
      this.games = this.$store.getters.getGamesFilterByTopic(this.select)
    }
  }
}
</script>

<style lang="stylus" module>
.card
  width 300px
  height 300px
  position relative
.filter
  width 100%
</style>

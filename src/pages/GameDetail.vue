<template>
    <div>
        <div>{{getGameById.name}}</div>
        <div>{{getGameById.topic.topic}}</div>
        <img :src="'http://www.facetheforce.today/random/200?r=' + getGameById.id">
        <div>{{getGameById.description}}</div>
        <q-btn @click="dashboard">Retour</q-btn>
        <q-btn>Activer</q-btn>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import actionTypes from '../store/actionTypes'
export default {
  data () {
    return {
      game: null
    }
  },
  async mounted () {
    await this.$store.dispatch(actionTypes.GAME_DETAIL, this.$route.params.gameid)
  },
  computed: {
    ...mapGetters(['getGameById'])
  },
  methods: {
    dashboard () {
      this.$router.push({ path: '/dashboard' })
    }
  }
}
</script>

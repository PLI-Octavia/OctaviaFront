<template>
    <div>
      <q-parallax>
        <img slot="media" :src="'http://www.facetheforce.today/random/1600?r=' + game.id">
      </q-parallax>
      <label>{{game.topic.topic}}</label>
      <div class="container">
        <div class="text-center">
          <h1 >{{game.name}}</h1>
          <div :class="$style.description">
            {{game.description}}
          </div>
          <div :class="$style.button">
            <q-btn @click="dashboard">Retour</q-btn>
            <q-btn>Activer</q-btn>
            <q-btn @click="launch">Tester</q-btn>
          </div>
        </div>
      </div>
  </div>
</template>
<style lang="stylus" module>
.description
    width 50%
    margin-left auto
    margin-right auto
.button
    margin-top 3%
</style>

<script>
export default {
  name: 'GameDetail',
  data () {
    return {
      game: null
    }
  },
  created () {
    this.game = this.$store.getters.getSelectedGame
  },
  methods: {
    dashboard () {
      this.$router.push({ path: '/dashboard' })
    },
    launch () {
      this.$router.push({ path: '/game/' + this.game.id })
    }
  }
}
</script>

<template>
    <div>
      <q-parallax>
        <img slot="media" :src="'http://www.facetheforce.today/random/1600?r=' + getActiveGame.id">
      </q-parallax>
      <label>{{getActiveGame.topic.topic}}</label>
      <div class="container">
        <div class="text-center">
          <h1 >{{getActiveGame.name}}</h1>
          <div :class="$style.description">
            {{getActiveGame.description}}
          </div>
          <div :class="$style.button">
            <q-btn @click="dashboard">Retour</q-btn>
            <q-btn>Activer</q-btn>
            <q-btn @click="launch">Jouer</q-btn>
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
  computed: {
    getActiveGame () {
      return this.$store.getters.getGameById(Number.parseInt(this.$route.params.gameid))
    }
  },
  methods: {
    dashboard () {
      this.$router.push({ path: '/dashboard' })
    },
    launch () {
      // Faire apparaitre une popup avec un select des enfants + choix de la conf
      // this.$router.push({ path: '/game/' + this.getActiveGame.id })
    }
  }
}
</script>

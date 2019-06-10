  <template>
    <q-card-media overlay-position="top">
      <img :src="'http://www.facetheforce.today/random/200?r=' + game.id"
      @click="gameDetail(game.id)">

      <q-card-title slot="overlay">
        {{ game.name }}
        <span slot="subtitle">{{ game.topic.name }}</span>
      </q-card-title>
    </q-card-media>
  </template>

<script>
export default {
  props: {
    game: {
      type: Object
    }
  },
  methods: {
    async gameDetail (gameId) {
      this.$router.push({ path: '/game/detail/' + gameId })
    }
  }
}
</script>

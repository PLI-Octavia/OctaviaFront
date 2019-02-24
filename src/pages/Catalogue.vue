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
      <game-card :game="game" />
    </q-card>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import GameCard from '../components/Card/GameCard'

export default {
  name: 'Catalogue',
  data () {
    return {
      select: 0,
      games: null
    }
  },
  components: {
    GameCard
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
  cursor pointer
.filter
  width 30%
  padding 15px
</style>

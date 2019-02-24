<template>

    <div>
        <q-parallax>
          <img slot="media" :src="'http://www.facetheforce.today/random/1600?r=' + getGameById.id">
        </q-parallax>
        <label>{{getGameById.topic.topic}}</label>
        <div class="container">
          <div class="text-center">
            <h1 >{{getGameById.name}}</h1>
            <div :class="$style.description">{{getGameById.description}}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div>
            <div :class="$style.button">
              <q-btn @click="dashboard">Retour</q-btn>
              <q-btn>Activer</q-btn>
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

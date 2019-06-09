<template>
  <div v-if="getActiveGame && getActiveGame.name !== null">
    <unity :src="`${gameUrl + getActiveGame.name}/Build/${getActiveGame.name}.json`" width="1000" height="600" :unityLoader="`${gameUrl + getActiveGame.name}/Build/UnityLoader.js`" />
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'
import $config from '../config'

export default {
  name: 'Game',
  computed: {
    getActiveGame () {
      return this.$store.getters.getGameById(Number.parseInt(this.$route.params.gameid))
    }
  },
  components: {
    Unity
  },
  beforeCreate () {
    this.gameUrl = $config.gameURL
  }
}
</script>

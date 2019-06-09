<template>
  <div v-if="getActiveGame && getActiveGame.name !== null">
    <unity :src="`${gameUrl + getActiveGame.name}/Build/${getActiveGame.name}.json`" width="1000" height="600" :unityLoader="`${gameUrl + getActiveGame.name}/Build/UnityLoader.js`" />
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'
import $config from '../config'

window.gameManagement = {
  _config: null,
  getConfig: function () {
    alert(this._config)
    if (this._config) {
      return this._config
    }
  },
  quitGame: function () {
    document.location.href = 'http://octavia-academy.com/'
  },
  load: function () {
    alert('load')
  },
  setConfig: function (test) {
    this._config = test
  }
}

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
  },
  async created () {
    // fetch la bonne config pas oublier le await
    await window.gameManagement.setConfig('toto')
    await console.log(window.gameManagement.getConfig())
  }
}
</script>

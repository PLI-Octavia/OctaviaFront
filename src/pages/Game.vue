<template>
  <div v-if="getActiveGame && getActiveGame.name !== null">
    <unity :src="`${gameUrl + getActiveGame.name}/Build/${getActiveGame.name}.json`" width="1000" height="600" :unityLoader="`${gameUrl + getActiveGame.name}/Build/UnityLoader.js`" :hideFooter="true"/>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'
import $config from '../config'

window.gameManagement = {
  _config: null,
  getConfig: function () {
    if (this._config) {
      return this._config
    }
  },
  quitGame: function () {
    document.location.href = 'http://octavia-academy.com/'
  },
  setConfig: function (test) {
    this._config = test
  }
}

export default {
  name: 'Game',
  data () {
    return {
      gameId: 0,
      templateId: 0,
      childId: 0
    }
  },
  computed: {
    getActiveGame () {
      return this.$store.getters.getGameById(this.gameId)
    }
  },
  components: {
    Unity
  },
  beforeCreate () {
    this.gameUrl = $config.gameURL
  },
  async created () {
    this.templateId = Number.parseInt(this.$route.params.templateId)
    this.childId = Number.parseInt(this.$route.params.childId)
    this.gameId = Number.parseInt(this.$route.params.gameid)
    // fetch la bonne config pas oublier le await
    if (this.templateId !== 0) {
      await window.gameManagement.setConfig(this.$store.getters.getTemplateById({gameId: this.$route.params.gameid, templateId: this.templateId}))
    }
  }
}
</script>

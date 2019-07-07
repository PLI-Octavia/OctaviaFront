<template>
  <div v-if="getActiveGame && getActiveGame.name !== null">
    <unity :src="`${gameUrl + getActiveGame.name}/Build/${getActiveGame.name}.json`" width="1000" height="600" :unityLoader="`${gameUrl + getActiveGame.name}/Build/UnityLoader.js`" :hideFooter="true"/>
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'
import $config from '../config'
import actionTypes from 'src/store/actionTypes'

window.gameManagement = {
  _config: null,
  context: null,
  gameId: null,
  templateId: null,
  childId: null,
  getConfig: function () {
    if (this._config) {
      return this._config
    }
  },
  quitGame: function () {
    document.location.href = 'http://octavia-academy.com/'
  },
  setConfig: function (data) {
    this._config = data
  },
  sendScore: function (score) {
    this.context.$store.dispatch(actionTypes.SEND_GAME_SCORE, { score: score, gameId: this.gameId, childId: this.childId, templateId: this.templateId })
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
      const template = this.$store.getters.getTemplateById({gameId: this.gameId, templateId: this.templateId})
      if (template) {
        window.gameManagement.templateId = this.templateId
        await window.gameManagement.setConfig(template.datas)
      }
    }
    window.gameManagement.context = this
    window.gameManagement.gameId = this.gameId
    window.gameManagement.childId = this.childId
  }
}
</script>

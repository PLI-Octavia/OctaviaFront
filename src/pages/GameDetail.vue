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
          </div>
        </div>

        <div :class="$style.launchGame">
          <span>Qui êtes vous ?</span>
          <div class="q-pa-md">
            <div class="q-gutter-sm">
              <q-radio v-for="child in childs" :key="child.id" v-model="childChoosen" :val="child.id" :label="child.firstname" />
            </div>
          </div>

          <div v-if="getActiveGame.templates">
            <div class="q-pa-md">
              <div class="q-gutter-sm">
                <q-radio v-for="template in getActiveGame.templates" :key="template.id" v-model="templateChoosen" :val="template.id" :label="template.name"/>
              </div>
            </div>
          </div>
          <div v-else>
            Le contenu de ce jeux n'est pas modifiable !
          </div>
          <q-btn @click="launch"> Jouer </q-btn>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GameDetail',
  data () {
    return {
      templateChoosen: 0,
      childChoosen: 1
    }
  },
  computed: {
    getActiveGame () {
      return this.$store.getters.getGameById(Number.parseInt(this.$route.params.gameid))
    },
    childs () {
      return this.$store.getters.getchildren
    }
  },
  methods: {
    dashboard () {
      this.$router.push({ path: '/dashboard' })
    },
    launch () {
      this.$router.push({ name: 'game', path: '/game/' + this.getActiveGame.id, params: { childId: this.childChoosen, templateId: this.templateChoosen } })
    }
  },
  mounted () {
    this.childChoosen = this.childs[0].id
  }
}
</script>

<style lang="stylus" module>
.description
    width 50%
    margin-left auto
    margin-right auto
.button
    margin-top 3%
</style>

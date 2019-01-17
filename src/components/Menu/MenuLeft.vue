<template>

  <q-layout-drawer
      side="left"
      v-model="drawer"
      :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null"
    >
      <menu-profil></menu-profil>
      <route-linker></route-linker>
    </q-layout-drawer>
</template>
<script>
import MenuProfil from './MenuProfil.vue'
import RouteLinker from './RouteLinker.vue'

export default {
  data () {
    return {
      drawer: true
    }
  },
  components: {
    MenuProfil,
    RouteLinker
  }
}
</script>

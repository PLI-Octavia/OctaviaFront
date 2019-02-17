<template>
  <div>
    <div v-if="getchildren">
      <q-card v-for="child in getchildren" :key="child.id" inline class="q-ma-sm">
        <q-item>
          <q-item-side avatar="https://www.shareicon.net/data/128x128/2015/12/21/690829_people_512x512.png" />
          <q-item-main>
            <q-item-tile label>{{ child.firstname + ' ' + child.lastname }}</q-item-tile>
          </q-item-main>
        </q-item>
        <q-card-title>
          <span slot="subtitle">{{ child.schoolclass_id}}</span>
        </q-card-title>
        <q-card-actions>
          <q-btn flat>Supprimer</q-btn>
          <q-btn flat>Modifer</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <div>
      <add-child></add-child>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddChild from '../components/Form/AddChild'
// import actionTypes from '../store/actionTypes'

export default {
  components: {
    AddChild
  },
  computed: {
    ...mapGetters(['getchildren'])
  }
}
</script>

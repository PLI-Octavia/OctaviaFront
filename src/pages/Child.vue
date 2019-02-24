<template>
  <div>
    <div v-if="getchildren">
      <q-card v-for="child in getchildren" :key="child.id" inline class="q-ma-sm">
        <user-card />
      </q-card>
    </div>

    <div>
      <add-child />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddChild from '../components/Form/AddChild'
import UserCard from '../components/Card/UserCard'
export default {
  name: 'Child',
  components: {
    AddChild,
    UserCard
  },
  computed: {
    ...mapGetters(['getchildren'])
  }
}
</script>

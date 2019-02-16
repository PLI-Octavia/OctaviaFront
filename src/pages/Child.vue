<template>
  <div>
    <div v-if="getchildren">
      <div v-for="child in getchildren" :key="child.id" >
        <span>{{ child.name }}</span>
      </div>
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

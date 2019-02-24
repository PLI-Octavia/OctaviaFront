<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card-content bg-white ">
        <q-field>
          <q-input
            v-model="user.firstname"
          />
        </q-field>
        <q-field>
          <q-input
            v-model="user.email"
          />
        </q-field>
        <br>
        <q-btn
          class="submit"
          color="primary"
          size="lg"
          @click="submit">
          Submit
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import actionTypes from '../../store/actionTypes'

export default {
  name: 'EditUser',
  data () {
    return {
      user: null
    }
  },
  created () {
    this.user = this.$store.getters.currentUser
  },
  methods: {
    async submit () {
      await this.$store.dispatch(actionTypes.EDIT_USER, this.user)
      this.user = this.$store.getters.currentUser
    }
  }
}
</script>

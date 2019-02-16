<template>
  <div>
    <div class="card-content bg-white ">
      <q-field>
        <q-input
          v-model="user.name"
        />
      </q-field>
      <q-field>
        <q-input
          v-model="user.email"
        />
      </q-field>
      <q-btn
        class="submit"
        color="primary"
        size="lg"
        @click="submit">
        Submit
      </q-btn>
    </div>
  </div>
</template>

<script>
// import { required, email } from 'vuelidate/lib/validators'
import actionTypes from '../../store/actionTypes'
// import { mapGetters } from 'vuex'
// Todo comprendre pkoi le bouton s'allume alors que toutes les conditions ne sont pas remplies.
export default {
  data () {
    return {
      user: null
    }
  },
  name: 'EditUser',
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

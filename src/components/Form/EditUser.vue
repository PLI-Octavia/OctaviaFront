<template>
  <div class="row cardform">
    <div class="col-md-6 offset-md-3">
      <q-card>
          <q-card-title>
            Vos informations
          </q-card-title>
          <q-card-separator />
        <q-card-main>
          <div class="card-content bg-white ">
            <q-field
              label="Votre prénom"
              :error="mailHasError"
              error-label="We need a valid email"
              >
              <q-input
                v-model="user.firstname"
              />
            </q-field>
            <q-field
              label="Votre Nom"
              :error="mailHasError"
              error-label="We need a valid email"
              >
              <q-input
                v-model="user.name"
              />
            </q-field>
            <q-field
              label="Email"
              :error="mailHasError"
              error-label="We need a valid email"
              >
              <q-input
                v-model="user.email"
              />
            </q-field>
            <q-card-separator />
            <q-card-actions>
              <q-btn
                flat
                color="primary"
                label="Modifier"
                @click="submit"
              />
            </q-card-actions>
          </div>
        </q-card-main>
      </q-card>
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
<style lang="stylus">
  .cardform
    margin-top 5%
</style>

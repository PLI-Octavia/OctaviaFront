<template>
  <div :class="$style.container">
    <div :class="$style.form">
      <q-field>
        <q-input
          v-model="loginForm.email"
          placeholder="Email"
        />
      </q-field>
      <q-field>
        <q-input
          v-model="loginForm.password"
          placeholder="Password"
          type="password"
        />
      </q-field>

      <q-btn color="primary" @click="submit">Submit</q-btn>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import actionTypes from '../store/actionTypes'

export default {
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    loginForm: {
      email: { required, email },
      password: required
    },
    validationRegisterGroup: ['loginForm.email', 'loginForm.password']
  },
  methods: {
    async submit () {
      if (this.$v.validationRegisterGroup.$error || this.$v.validationRegisterGroup.$invalid) {
        this.$q.notify({ message: 'Veuillez saisir votre mail et votre mot de passe' })
        return
      }
      await this.$store.dispatch(actionTypes.LOGIN_USER, this.loginForm)
    }
  }
}
</script>

<style lang="stylus" module>
  .container
    width 100%
    height 100%
  .form
    width 300px
    height 300px
    background-color white
    position relative
    left 80%
    top 15%
</style>

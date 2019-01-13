<template>
  <div :class="$style.container">
    je suis sur l'index
  </div>
</template>

<script>
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
  .link
    color blue
    cursor pointer
</style>

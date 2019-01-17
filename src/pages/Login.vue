<template>
  <div :class="$style.container">
    <div class="flex justify-center full-height">
      <div class="card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto " id="login">
      <div class="card-content bg-white ">
        <div>
          <q-input
            class="full-width"
            type="email"
            v-model="loginForm.email"
            placeholder="Email"
          />
        </div>
        <div>
          <q-input
            class="full-width"
            type="password"
            v-model="loginForm.password"
            placeholder="Mot de passe"
          />
        </div>
        <div class="card-actions inline-block vertical-middle">
          <q-btn
            color="primary full-width"
            size="lg"
            full-widht
            @click="submit"
          >
          Se connecter
          </q-btn>
        </div>
      </div>
      <br>
        <a :class="$style.link" @click="$router.push('/register')"> Créer un compte </a>
      </div>
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
  @import '~variables'
  .container
    width 100%
    height 100%
  .link
    color $primary
    cursor pointer
  .black
    color black
</style>

<style lang="stylus">
  .card
    margin-bottom 0px
  .card-content
    min-height 160px
    padding 60px
  .card-actions
    margin-top 20px
  #login
    margin-top 10%
    min-width 500px
  button
    margin-bottom 4%
  h4
    font-weight 300
</style>

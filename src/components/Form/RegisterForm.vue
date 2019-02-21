<template>
  <div :class="$style.form">
    <div class="card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto " id="login">
      <div class="card-content bg-white ">
        <q-field>
          <q-input
            v-model="registerForm.firstname"
            placeholder="Prénom"
          />
        </q-field>
        <q-field>
          <q-input
            v-model="registerForm.lastname"
            placeholder="Nom"
          />
        </q-field>
        <q-field>
          <q-input
            v-model="registerForm.email"
            placeholder="Email"
          />
        </q-field>
        <q-field>
          <q-input
            v-model="registerForm.password"
            placeholder="Password"
            type="password"
          />
        </q-field>
        <q-field>
          <q-input
            v-model="registerForm.c_password"
            placeholder="Confirmation Password"
            type="password"
          />
        </q-field>
        <q-field>
          <q-radio color="black" v-model="registerForm.role" val="1" label="Je suis un parent" />
          <q-radio color="black" v-model="registerForm.role" val="2" label="Je suis un professeur" />
        </q-field>

        <q-btn
          class="submit"
          color="primary"
          size="lg"
          @click="submit"
          :disabled="$v.validationRegisterGroup.$invalid">
          Submit
        </q-btn>
        <br>
        <p id="connect">
          Vous avez déjà un compte
          <a :class="$style.link" @click="$router.push('/login')">
          connectez vous
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import actionTypes from '../../store/actionTypes'
// Todo comprendre pkoi le bouton s'allume alors que toutes les conditions ne sont pas remplies.

export default {
  name: 'RegisterForm',
  data () {
    return {
      registerForm: {
        email: '',
        password: null,
        c_password: null,
        role: '1',
        firstname: null,
        lastname: null
      }
    }
  },
  validations: {
    registerForm: {
      email: { required, email },
      password: required,
      c_password: required,
      firstname: required,
      lastname: required
    },
    validationRegisterGroup: ['registerForm.firstname', 'registerForm.lastname', 'registerForm.email', 'registerForm.password', 'registerForm.c_password']
  },
  methods: {
    async submit () {
      if (this.$v.validationRegisterGroup.$error || this.$v.validationRegisterGroup.$invalid) {
        this.$q.notify({ message: 'Veuillez remplir tous les champs' })
        return
      }
      if (this.registerForm.password === this.registerForm.c_password) {
        await this.$store.dispatch(actionTypes.REGISTER_USER, this.registerForm)
      } else {
        this.$q.notify({ message: 'Vos mot de passe ne sont pas identiques' })
      }
    }
  }
}
</script>

<style lang="stylus" module>
.form
.link
  color blue
  cursor pointer
</style>
<style lang="stylus">
  .card
    margin-bottom 0px
  .card-content
    min-height 160px
    padding 60px
  .card-actions
    margin-top 20px
  .q-option-label
    color black
  .submit
    margin-top 5%
  #login
    margin-top 10%
    min-width 500px
  #connect
    position relative
    top: 62px;
    left: 82px;
  button
    margin-bottom 4%
  h4
    font-weight 300
  p
    color black
</style>

<template>
  <div :class="$style.container">
    <div :class="$style.form">
      <q-field>
        <q-input
          v-model="registerForm.name"
          placeholder="Nom Complet"
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
        <q-radio v-model="registerForm.role" val="1" label="Je suis un parent" />
        <q-radio v-model="registerForm.role" val="2" label="Je suis un professeur" />
      </q-field>

      <q-btn
        color="primary"
        @click="submit"
        :disabled="$v.validationRegisterGroup.$invalid">
        Submit
      </q-btn>
      <br>
      Vous avez déjà un compte<a :class="$style.link" @click="$router.push('/login')"> connectez vous  </a>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import actionTypes from '../store/actionTypes'
// Todo comprendre pkoi le bouton s'allume alors que toutes les conditions ne sont pas remplies.
export default {
  data () {
    return {
      registerForm: {
        email: '',
        password: null,
        c_password: null,
        role: '1',
        name: null
      }
    }
  },
  validations: {
    registerForm: {
      email: { required, email },
      password: required,
      c_password: required,
      name: required
    },
    validationRegisterGroup: ['registerForm.name', 'registerForm.email', 'registerForm.password', 'registerForm.c_password']
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

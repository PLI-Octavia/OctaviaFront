<template>
  <div>
    <div class="row cardform">
      <div class="col-md-6 offset-md-3">
        <q-card>
            <q-card-title>
              Ajout d'un enfant
            </q-card-title>
            <q-card-separator />
          <q-card-main>
            <div class="card-content bg-white ">
              <q-field
                label="Prénom"
                error-label="We need a valid email"
                >
                <q-input
                v-model="childForm.firstname"
                />
              </q-field>
              <q-field
                label="Nom"
                error-label="We need a valid email"
                >
                <q-input
                v-model="childForm.lastname"
                />
              </q-field>
              <div>
               <q-select
                v-model="childForm.schoolclass_id"
                float-label="Dans quelle classe est votre enfant*"
                radio
                :options="getSchoolClass"
              />
              </div>
              <q-card-separator />
              <q-card-actions>
                <q-btn
                  flat
                  label="Valider"
                  :class="$style.update"
                  @click="submit"
                  @enter="submit"
                />
              </q-card-actions>
            </div>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import actionTypes from '../../store/actionTypes'
import { mapGetters } from 'vuex'

export default {
  name: 'AddChild',
  data () {
    return {
      childForm: {
        firstname: null,
        lastname: null,
        schoolclass_id: 0
      },
      select: 0
    }
  },
  computed: {
    ...mapGetters(['getSchoolClass'])
  },
  methods: {
    async submit () {
      if (this.childForm.schoolclass_id !== 0) {
        await this.$store.dispatch(actionTypes.USER_ADDCHILD, this.childForm)
      } else {
        this.$q.notify({ message: 'Veuillez renseigner la classe actuelle de votre enfant' })
      }
    }
  }
}
</script>
<style lang="stylus">
  .cardform
    margin-top 5%
</style>

<style lang="stylus" module>
  .update
    background-color #673AB7
    display block
    text-align center
    color white
    padding 10px
    cursor pointer
    width 100%
    border-radius 0px
    margin-top 20px
</style>

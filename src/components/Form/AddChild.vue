<template>
  <div>
    <div class="card-content bg-white ">
      <q-field>
        <q-input
          v-model="childForm.firstname"
          placeholder="Prénom"
        />
      </q-field>

      <q-field>
        <q-input
          v-model="childForm.lastname"
          placeholder="Nom"
        />
      </q-field>

       <q-field>
      <div>
        <q-select
          v-model="childForm.schoolclass_id"
          inverted
          :options="getSchoolClass"
        />
      </div>
      </q-field>
      <q-btn
        class="submit"
        color="primary"
        @click="submit"
        @enter="submit"
        >
        Submit
      </q-btn>
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
      select: 0,
      name: null
    }
  },
  computed: {
    ...mapGetters(['getSchoolClass'])
  },
  methods: {
    async submit () {
      console.log(this.childForm)
      if (this.childForm.schoolclass_id !== 0) {
        await this.$store.dispatch(actionTypes.USER_ADDCHILD, this.childForm)
      } else {
        this.$q.notify({ message: 'Veuillez renseigner la classe actuelle de votre enfant' })
      }
    }
  }
}
</script>

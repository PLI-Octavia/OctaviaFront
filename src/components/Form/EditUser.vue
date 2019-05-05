<template>
  <div class="row cardform">
    <div class="col-md-6 offset-md-3">
      <q-card>
        <q-card-title>
          Votre Avatar
        </q-card-title>
        <q-card-separator />
        <q-card-main>
          <div class="card-content bg-white ">
            <img :src="user.avatar_source" :class="$style.avatar_img">
            <q-field>
              <label :class="$style.label" for="file">
                <q-icon :class="$style.icon" name="cloud_upload" />
                Changer votre avatar</label>
              <input
              ref="AvatarUploader"
              accept="image/png, image/jpeg"
              type="file"
              id='file'
              :class="$style.inputfile"
              @change="uploadAvatar"
            >
            </q-field>
          </div>
        </q-card-main>
      </q-card>
    </div>

    <div :class="$style.infoForm" class="col-md-6 offset-md-3">
      <q-card>
          <q-card-title>
            Vos informations
          </q-card-title>
          <q-card-separator />
        <q-card-main>
          <div class="card-content bg-white ">
            <q-field
              label="Votre prénom"
              error-label="We need a valid email"
              >
              <q-input
                v-model="user.firstname"
              />
            </q-field>
            <q-field
              label="Votre Nom"
              error-label="We need a valid email"
              >
              <q-input
                v-model="user.lastname"
              />
            </q-field>
            <q-field
              label="Email"
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
                :class="$style.update"
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
  computed: {
    user () {
      return this.$store.getters.currentUser
    }

  },
  methods: {
    async submit () {
      await this.$store.dispatch(actionTypes.EDIT_USER, this.user)
      this.user = this.$store.getters.currentUser
    },
    async uploadAvatar () {
      const files = this.$refs.AvatarUploader.files
      if (files.length <= 0) {
        return
      }
      let image = new FormData()
      image.append('file', files[0])
      await this.$store.dispatch(actionTypes.AVATAR_UPDATE, image)
    }
  }
}
</script>
<style lang="stylus">
  .cardform
    margin-top 55px
</style>

<style lang="stylus" module>
  .inputfile
    width 0.1px
    height 0.1px
    opacity 0
    overflow hidden
    position absolute
    z-index -1
  .icon
    font-size 1.2em
    color white
  .label
    background-color #673AB7
    display block
    text-align center
    color white
    padding 10px
    cursor pointer
  .update
    background-color #673AB7
    display block
    text-align center
    color white
    padding 10px
    cursor pointer
    width 100%
    border-radius 0px
    margin-top 10px
  .avatar_img
    width 150px
    height 150px
    border-radius 50%
    margin-left 35%
    margin-bottom 50px
  .infoForm
    margin-top 20px
</style>

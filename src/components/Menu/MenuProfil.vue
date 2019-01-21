<template>
  <div>
    <div id="profile">
        <img :src="currentUser.avatar_source" style='height: 80px' class="inline-block">
        <!--img src="../img/avatar-1.svg" id="avatar" class="inline-block"-->
        <div id="user-name">
          <span class="text-white"> {{ currentUser.name }} </span>
        </div>
        <q-btn
          :class="$style.logout"
          round
          flat
          dense
          size="sm"
          icon="logout"
          color="white"
          @click.prevent="logout"
        />
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import actionTypes from '../../store/actionTypes'

export default {
  name: 'MenuProfil',
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    async logout () {
      await this.$store.dispatch(actionTypes.LOGOUT_USER)
    }
  }
}
</script>
<style lang="stylus" module>
.logout
  position absolute
  right 0px
  top 50px
</style>

<style lang="stylus">
#avatar
  padding: 20px;
#profile
  height: 80px;
  background-color: #cc66ff;
#user-name
  left: 90px;
  bottom: 77px;
  position: relative;
  width: 159px
</style>

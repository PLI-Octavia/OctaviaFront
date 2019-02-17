<template>
  <div>
    <q-list highlight>
      <q-item>
        <q-item-side>
          <q-item-tile>
            <img
            :class="$style.avatar_img"
            :src="currentUser.avatar_source"
            >
          </q-item-tile>
        </q-item-side>
        <q-item-main :label="currentUser.firstname + ' ' + currentUser.lastname"/>
        <q-item-side right>
          <q-btn
              :class="$style.logout"
              round
              flat
              dense
              size="sm"
              icon="logout"
              color="black"
              @click.prevent="logout"
            />
        </q-item-side>
      </q-item>
    </q-list>
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
.avatar_img
    width 80px
    height 80px
    border-radius 50%
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

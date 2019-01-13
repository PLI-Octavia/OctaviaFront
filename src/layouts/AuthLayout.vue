<template>
  <q-layout :class="$style.container" view="lHh Lpr lFf">
    AuthLayout
    <!-- C'est ici qu'est chargé la page-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'AuthLayout'
}
</script>

<style lang="stylus" module>
  .container
    width 100%
    height 100%
    background-color #48caf2
</style>

<template>
  <div :class="$style.container">
    <login-form />>
  </div>
</template>

<script>
import LoginForm from '../components/Form/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style lang="stylus" module>
  @import '~variables'
  .container
    width 100%
    height 100%
</style>

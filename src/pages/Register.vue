<template>
  <div :class="$style.container">
    <div class="flex justify-center full-height">
      <register-form />
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/Form/RegisterForm'

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style lang="stylus" module>
  .container
    width 100%
    height 100%

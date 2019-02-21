<template>
  <div :class="$style.container">
    <div class="flex justify-center full-height">
      <register-form />
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/Form/RegisterForm'
// Todo comprendre pkoi le bouton s'allume alors que toutes les conditions ne sont pas remplies.
export default {
  components: {
    RegisterForm
  }
}
</script>

<style lang="stylus" module>
  .container
    width 100%
    height 100%

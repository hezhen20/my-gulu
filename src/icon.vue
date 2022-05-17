<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'
export default {
  props: {
    name: {
      type: String,
      default: function() {
        return ''
      }
    }
  }
}
</script>

<style lang="scss">
  .g-icon {
    width: 1em;
    height: 1em
  }
</style>
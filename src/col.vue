<template>
  <div class="col" :class="`col-${span}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" scoped>
  .col {
    height: 100px;
    background: #ccc;
    border: 1px solid blueviolet;
    width: 100%; // 没传span的时候，保证能均匀填满，因为flex-wrap默认值为 no-wrap，所以不会换行。
    $class-prefix: col-;
    // 根据 span 来划分宽度，总共为 24
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }

</style>
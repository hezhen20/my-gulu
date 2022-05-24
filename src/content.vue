<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .content {
    flex-grow: 1;   // 就可以让 content 撑大
  }
</style>
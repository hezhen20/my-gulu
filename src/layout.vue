<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluLayout',
  data() {
    return {
      layoutClass: {
        hasSider: false,  // layout中是否有 sider
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'GuluSider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    flex-grow: 1; // layout 本身作为子元素时
    display: flex; 
    flex-direction: column;  // 按列排
    &.hasSider {
      flex-direction: row;
    }
  }
</style>
<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (itemName, vm) => {
      let {width, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: #2490ff;
  .tabs-head {
    display: flex;
    height: $tab-height;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ddd;
    // 子元素选择器
    >.actions-wrapper {
      margin-left: auto;
      padding: 0 1em;
    }
    >.line {
      position: absolute;
      bottom: 0;
      width: 100px;
      border-bottom: 0.2em solid $blue;
      transition: all 350ms;
    }
  }
</style>
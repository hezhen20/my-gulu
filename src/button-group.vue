<template>
  <div class="g-button-group">
    <slot>group</slot>
  </div>
</template>

<script>
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`g-button-group 的子元素应全是 g-button，而是你写的是 ${name}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .g-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      margin-left: -1px;    // 合并相邻按钮之间的border
      &:not(:first-child) {
        margin-left: -1px;  // 第一个button不需要margin-left: -1px
      }
      // 第一个button左上和右下有圆角
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      // 最后一个button右上和右下有圆角
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      // hover时按钮显示在最上面，使得边框效果不会被覆盖
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
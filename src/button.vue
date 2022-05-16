<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon name="loading" v-if="loading" class="loading" />
    <!-- slot 无法加类名，用 div 包起来 -->
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: function() {
        return ''
      }
    },
    iconPosition: {
      type: String,
      default: function() {
        return 'left'
      },
      validator (value) {
        return value === 'left' || value === 'right'
      }
    },
    loading: {
      type: Boolean,
      default: function() {
        return false
      }
    }
  }
}
</script>
<style lang="scss">
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
  // 通过控制类名 以及flex 布局来调整 icon 和 文字的左右关系
  display: inline-flex; justify-content: center; align-items: center;
  vertical-align: middle;   // 解决内联元素垂直不对齐的问题
  &.icon-left {
    > .icon { order: 1; margin-right: .2em; }
    > .content { order: 2; }
  }
  &.icon-right {
    > .content { order: 1; }
    > .icon { order: 2; margin-left: .2em; }
  }
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>
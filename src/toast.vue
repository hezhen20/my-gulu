<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: function() {
        return true
      }
    },
    autoCloseDelay: {
      type: Number,
      default: function() {
        return 5
      }
    },
    closeButton: {
      type: Object,
      default: function() {
        return {
          text: '关闭',
          callback: undefined
        }
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove()   // 移除元素
      this.$destroy()     // 彻底销毁组件
    },
    onClickClose() {
      // 先关闭 toast
      this.close()
      // 如果用户传了callback, 并且是函数，那就执行用户自定义的回调
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75); // 渐变
  .toast {
    font-size: $font-size; height: $toast-height; line-height: 1.8;
    color: white;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%);  // 水平居中
    display: flex;  align-items: center;    // 垂直居中
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
  }
  .line {
    height: 100%;
    border-left: 1px solid #ccc;
    padding-left: 1em;
    margin-left: 1em;
  }
</style>
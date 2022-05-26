<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
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
    },
    // 传 html 有风险，需要用户手动开启
    enableHtml: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    position: {
      type: String,
      default: function() {
        return 'top'
      },
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000);
    }
    this.$nextTick(() => {
      // 解决竖线因为父元素设置min-height了而高度为 0 的问题
      this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
    })
  },
  computed: {
    toastClasses(){
      return {
        [`position-${this.position}`]: true
      }
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
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75); // 渐变
  $animation-duration: 300ms;
  @keyframes fade-up {
    0% {opacity: 0; transform: translateX(-50%) translateY(100%);}
    100% {opacity: 1; transform: translateX(-50%) translateY(0%);}
  }
  @keyframes fade-down {
    0% {opacity: 0; transform: translateX(-50%) translateY(-100%);}
    100% {opacity: 1; transform: translateX(-50%) translateY(0%);}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
  .toast {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    color: white;
    position: fixed; left: 50%;
    display: flex;  align-items: center;    // 垂直居中
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 4px 16px;
    .close {
      flex-shrink: 0;   // closeButton 文本不换行
    }
    .line {
      height: 100%;
      border-left: 1px solid #ccc;
      padding-left: 1em;
      margin-left: 1em;
    }
    &.position-top {
      top: 0; transform: translateX(-50%);  // 水平居中
      animation: fade-down $animation-duration;
    }
    &.position-bottom {
      bottom: 0;  transform: translateX(-50%);
      animation: fade-up $animation-duration;
    }
    &.position-middle {
      top: 50%; transform: translate(-50%, -50%);   // transform 需考虑兼容性
      animation: fade-in $animation-duration;
    }
  }
</style>
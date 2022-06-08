<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true,
    }
  },
  data() {
    return{
      active: false,  // 是否被点击激活
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return
      }
      // 发送
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style lang="scss" scoped>
  $blue: #2490ff;
  $disabled-text-color: #bfbfbf;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;   // item 之间的间隔，两个字
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      // border-bottom: 2px solid $blue;   // 直接给 item 加border-bottom实现tab的下划线，但是效果不好，tab文字会上移
    }
    &.disabled {
      color: $disabled-text-color;
      cursor:  not-allowed;
    }
  }
</style>
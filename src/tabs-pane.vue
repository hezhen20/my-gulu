<template>
  <div class="tabs-pane" :class="classes" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsPane',
  props: {
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
        active: this.active
      }
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs-pane {
    &.active {
      background: red;
    }
  }
</style>
<template>
  <div style="padding-top: 16px;">
    <h2>二、自定义延时关闭的时间</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="$toast('点击弹出提示', {autoCloseDelay: 1})">弹出toast</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
    </p>
    <div>
      <ul>
        <li><strong>autoCloseDelay</strong></li>用于设置 toast 在多少秒后自动关闭。
      </ul>
    </div>
  </div>
</template>
<style>
  .toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import GButton from '../../../src/button'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {GButton},
    data () {
      return {
        content: `
          <style>
            .toast {
              z-index: 30;
            }
          </style>
          <g-button @click="$toast('点击弹出提示', {autoCloseDelay: 1})">弹出toast</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
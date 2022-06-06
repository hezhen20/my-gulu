<template>
  <div style="padding-top: 16px;">
    <h2>六、支持传入 html</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div>
      <g-button @click="$toast('<i>这是斜体提示</i>', {enableHtml: true})">弹出toast</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>注意事项</strong>
    </p>
    <div>
      <ul>
        <li>传 html 有风险，需手动开启：将 <strong>enableHtml</strong> 设为 true 即可，默认为 false。</li>
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
          <g-button @click="$toast('<i>这是斜体提示</i>', {enableHtml: true})">弹出toast</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
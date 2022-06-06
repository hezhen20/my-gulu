<template>
  <div style="padding-top: 16px;">
    <h2>一、简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="$toast('点击弹出提示')">弹出toast</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
    </p>
    <div>
      $toast() 接收两个参数：
      <ul>
        <li>第一个参数为提示框的文本内容；</li>
        <li>第二个参数为一个对象，其中包含对 toast 的一些设置项。具体用法见下方介绍。</li>
      </ul>
    </div>

    <p>
      <strong>注意事项</strong>
    </p>
    <div>
      toast 默认自动关闭，默认延时为 5 秒。
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
          <g-button @click="$toast('点击弹出提示')">弹出toast</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<template>
  <div style="padding-top: 16px;">
    <h2>五、自定义关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="$toast('点击弹出提示', {autoClose: false, closeButton: {text: '知道了', callback: sayHello} })">弹出 toast</g-button>
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
        <li><strong>closeButton </strong></li>
        用于设置 toast 的关闭按钮：
        <ol>
          <li><strong>text: </strong>关闭按钮的文本；</li>
          <li><strong>callback: </strong>点击关闭按钮执行的回调函数。</li>
        </ol>
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
          <g-button @click="$toast('点击弹出提示', 
              {
                autoClose: false,
                closeButton: {
                  text: '知道了', 
                  callback: sayHello
                } 
              }
            )"
          >
            弹出 toast
          </g-button>

          methods: {
            sayHello() {
              alert('靓仔你好')
            }
          }
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      sayHello() {
        alert('靓仔你好')
      }
    }
  }
</script>
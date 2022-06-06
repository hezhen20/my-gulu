<template>
  <div style="padding-top: 16px;">
    <h2>支持错误提示</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="输入框" :error="errorMessage"></g-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
    </p>
    <div>
      <ul>
        <li><strong>error</strong></li>error属性用于设置输入框右侧的错误提示。
      </ul>
    </div>
  </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: {GInput},
    data () {
      return {
        errorMessage: '输入内容有误！',
        content: `
          data:{
            errorMessage: '输入内容有误！'
          }
          <g-input value="输入框" :error="errorMessage"></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
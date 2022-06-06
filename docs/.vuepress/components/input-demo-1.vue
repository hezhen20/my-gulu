<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input value="输入"></g-input>
    <g-input value="禁用" disabled></g-input>
    <g-input value="只读" readonly></g-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
    </p>
    <div>
      <ul>
        <li><strong>disabled</strong></li>用来设置输入框的禁用状态，默认不禁用。
        <li><strong>readonly</strong></li>用来设置输入框的只读状态，默认不生效。
      </ul>
    </div>
  </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: { GInput },
    data () {
      return {
        selected: '1',
        content: `
          <g-input></g-input>
          <g-input value="中文"></g-input>
          <g-input value="中文" disabled></g-input>
          <g-input value="中文" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
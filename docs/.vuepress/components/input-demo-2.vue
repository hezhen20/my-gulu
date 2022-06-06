<template>
  <div style="padding-top: 16px;">
    <h2>支持 v-model 双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input v-model="value"></g-input>
    <div>
      value: {{value}}
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GInput from '../../../src/input'
  export default {
    components: {GInput},
    data () {
      return {
        value: 'hello',
        content: `
          data:{
            value: 'hello'
          }
          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
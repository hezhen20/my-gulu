<template>
  <div style="padding-top: 16px;">
    <h2>支持按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>首页</g-button>
      <g-button icon="right" iconPosition="right">下一页</g-button>
    </g-button-group>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>注意事项</strong>
      <ul>
        <li>g-button-group 的子组件只能是 g-button, 否则会报错。</li>
      </ul>
    </p>
  </div>
</template>
<script>
  import Button from '../../../src/button.vue'
  import ButtonGroup from '../../../src/button-group.vue'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    },
    data () {
      return {
        content: `
          <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>首页</g-button>
            <g-button icon="right" iconPosition="right">下一页</g-button>
          </g-button-group>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
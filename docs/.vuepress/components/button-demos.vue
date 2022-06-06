<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button icon="settings" :iconPosition="position">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
    </p>
    <div>
      <ul>
        <li><strong>icon</strong></li>用来设置按钮的icon图标。
        <li><strong>iconPosition</strong></li>用来设置按钮icon图标的位置，默认为 left，仅支持 left/right 两个值。
        <li><strong>loading</strong></li>用来设置按钮的加载状态，默认值为 false。
      </ul>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/button.vue'
  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        position: 'right',
        content: `
          data:{
            position: 'right'
          }
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button icon="settings" :iconPosition="position">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
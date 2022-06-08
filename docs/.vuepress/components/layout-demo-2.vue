<template>
  <div style="padding-top: 16px;">
    <h2>添加sider</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="margin-bottom:50px;">
      <g-header style="height: 50px; background:#aaa;">
        header
      </g-header>
      <g-layout>
        <g-sider style="height: 150px; background:#ccc; width:200px;">
          sider
        </g-sider>
        <g-content style="height: 150px; padding: 0; background: #eee;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background: #aaa;">
        footer
      </g-footer>
    </g-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import GLayout from '../../../src/layout'
  import GHeader from '../../../src/header'
  import GFooter from '../../../src/footer'
  import GContent from '../../../src/content'
  import GSider from '../../../src/sider'

  export default {
    components: {GLayout, GHeader, GFooter, GContent, GSider},
    data () {
      return {
        content: `
          <g-layout style="margin-bottom:50px;">
            <g-header style="height: 50px; background:#aaa;">
              header
            </g-header>
            <g-layout>
              <g-sider style="height: 150px; background:#ccc; width:200px;">
                sider
              </g-sider>
              <g-content style="height: 150px; background: #eee;">
                content
              </g-content>
            </g-layout>
            <g-footer style="height: 50px; background: #aaa;">
              footer
            </g-footer>
          </g-layout>

      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
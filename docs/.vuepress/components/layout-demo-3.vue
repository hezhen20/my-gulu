<template>
  <div style="padding-top: 16px;">
    <h2>sider在最左侧</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="overflow:hidden; margin-bottom:50px;">
      <g-sider style=" background: #ccc; width: 100px; color: black;">
        sider
      </g-sider>
      <g-layout>
        <g-header style="height: 50px; background: #aaa;">
          header
        </g-header>
        <g-content style="height: 150px; background: #eee; padding: 0; margin: 0;">
          content
        </g-content>
        <g-footer style="height: 50px; background: #aaa;">
          footer
        </g-footer>
      </g-layout>
    </g-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
      <ul>
        <li>可通过 g-layout 的嵌套组合拼出你想要的布局结构</li>
      </ul>
    </p>
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
          <g-layout style="overflow:hidden; margin-bottom:50px;">
            <g-sider style=" background: #ccc; width: 100px; color: black;">
              sider
            </g-sider>
            <g-layout>
              <g-header style="height: 50px; background: #aaa;">
                header
              </g-header>
              <g-content style="height: 150px; background: #eee;">
                content
              </g-content>
              <g-footer style="height: 50px; background: #aaa;">
                footer
              </g-footer>
            </g-layout>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
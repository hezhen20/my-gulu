<template>
  <div style="padding-top: 16px;">
    <h2>三、支持给 tab 添加 icon</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected" style="margin-bottom: 50px;">
      <g-tabs-head>
        <g-tabs-item name="tab1">
          <g-icon name="settings"></g-icon>设置
        </g-tabs-item>
        <g-tabs-item name="tab2">tab2</g-tabs-item>
        <g-tabs-item name="tab3">tab3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="tab1">设置...</g-tabs-pane>
        <g-tabs-pane name="tab2">content 2</g-tabs-pane>
        <g-tabs-pane name="tab3">content 3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
      <ul>
        <li>在 tabs-item 中添加 icon 即可</li>
      </ul>
    </p>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
  import GTabs from '../../../src/tabs'
  import GTabsBody from '../../../src/tabs-body'
  import GTabsHead from '../../../src/tabs-head'
  import GTabsItem from '../../../src/tabs-item'
  import GTabsPane from '../../../src/tabs-pane'
  import GIcon from '../../../src/icon'

  export default {
    components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane, GIcon},
    data () {
      return {
        selected: 'tab3',
        content: `
          data:{
            selected: 'tab3'
          }

          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="tab1">
                <g-icon name="settings"></g-icon>设置
              </g-tabs-item>
              <g-tabs-item name="tab2">tab2</g-tabs-item>
              <g-tabs-item name="tab3">tab3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="tab1">设置...</g-tabs-pane>
              <g-tabs-pane name="tab2">content 2</g-tabs-pane>
              <g-tabs-pane name="tab3">content 3</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
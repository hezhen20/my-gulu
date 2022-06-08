<template>
  <div style="padding-top: 16px;">
    <h2>四、右侧附加操作</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected" style="margin-bottom: 50px;">
      <g-tabs-head>
        <template slot="actions">
          <g-button>more actions</g-button>
        </template>
        <g-tabs-item name="tab1">tab1</g-tabs-item>
        <g-tabs-item name="tab2">tab2</g-tabs-item>
        <g-tabs-item name="tab3">tab3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="tab1">content1</g-tabs-pane>
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
        <li><strong>actions</strong></li>tabs-header 提供了 actions 插槽，可在其中添加你需要的内容。
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
  import GButton from '../../../src/button'

  export default {
    components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane, GButton},
    data () {
      return {
        selected: 'tab1',
        content: `
          data:{
            selected: 'tab3'
          }

          <g-tabs :selected="selected">
            <g-tabs-head>
              <template slot="actions">
                <g-button>more actions</g-button>
              </template>
              <g-tabs-item name="tab1">tab1</g-tabs-item>
              <g-tabs-item name="tab2">tab2</g-tabs-item>
              <g-tabs-item name="tab3">tab3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="tab1">content1</g-tabs-pane>
              <g-tabs-pane name="tab2">content 2</g-tabs-pane>
              <g-tabs-pane name="tab3">content 3</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
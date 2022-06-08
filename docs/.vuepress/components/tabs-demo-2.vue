<template>
  <div style="padding-top: 16px;">
    <h2>二、设置页签禁用</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected" style="margin-bottom: 50px;">
      <g-tabs-head>
        <g-tabs-item name="tab1">tab1</g-tabs-item>
        <g-tabs-item name="tab2" disabled>tab2</g-tabs-item>
        <g-tabs-item name="tab3">tab3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="tab1">content 1</g-tabs-pane>
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
        <li><strong>disabled</strong></li>为 tabs-item 添加该属性，可将对应的 tab 页签设置成禁用状态。
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

  export default {
    components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane},
    data () {
      return {
        selected: 'tab1',
        content: `
          data:{
            selected: 'tab1'
          }

          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="tab1">tab1</g-tabs-item>
              <g-tabs-item name="tab2" disabled>tab2</g-tabs-item>
              <g-tabs-item name="tab3">tab3</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="tab1">content 1</g-tabs-pane>
              <g-tabs-pane name="tab2">content 2</g-tabs-pane>
              <g-tabs-pane name="tab3">content 3</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
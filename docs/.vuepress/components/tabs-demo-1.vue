<template>
  <div style="padding-top: 16px;">
    <h2>一、简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected" style="margin-bottom: 50px;">
      <g-tabs-head>
        <g-tabs-item name="tab1">tab1</g-tabs-item>
        <g-tabs-item name="tab2">tab2</g-tabs-item>
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
        <li><strong>selected</strong></li>用于设置 tab 选中的页签。
        <li><strong>name</strong></li>用于标识 tabs-item 和 tabs-pane。
      </ul>
    </p>
    <p>
      <strong>注意事项</strong>
      <ul>
        <li>tabs-item 和 tabs-pane 为<strong>一一对应</strong>关系，所以二者的 name 需保持一致。</li>
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
              <g-tabs-item name="tab2">tab2</g-tabs-item>
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
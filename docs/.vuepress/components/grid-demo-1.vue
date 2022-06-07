<template>
  <div style="padding-top: 16px;">
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div>
      <g-row>
        <g-col>24</g-col>
      </g-row>
      <g-row>
        <g-col>12</g-col>
        <g-col>12</g-col>
      </g-row>
      <g-row>
        <g-col span="8">8</g-col>
        <g-col span="8">8</g-col>
        <g-col span="8">8</g-col>
      </g-row>
      <g-row>
        <g-col span="2">2</g-col>
        <g-col span="22">22</g-col>
      </g-row>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <p>
      <strong>选项说明</strong>
    </p>
    <div>
      <ul>
        <li><strong>span</strong></li>栅格一行总共为 24 格，可设置 span 来自定义栅格的占比。
        <li><strong>.row / .col</strong></li>可通过 .row / .col 自定义行和列的样式。
      </ul>
    </div>
  </div>
</template>
<script>
  import GRow from '../../../src/row'
  import GCol from '../../../src/col'
  export default {
    components: { GRow, GCol },
    data () {
      return {
        selected: '1',
        content: `
          <div>
            <g-row>
              <g-col>24</g-col>
            </g-row>
            <g-row>
              <g-col>12</g-col>
              <g-col>12</g-col>
            </g-row>
            <g-row>
              <g-col span="8">8</g-col>
              <g-col span="8">8</g-col>
              <g-col span="8">8</g-col>
            </g-row>
            <g-row>
              <g-col span="2">2</g-col>
              <g-col span="22">22</g-col>
            </g-row>
          </div>

          <style lang="scss" scoped>
            .col {
              border: 1px dashed #bbb;
              background-color: #fff;
              margin-bottom: 10px;
            }
          </style>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    border: 1px dashed #bbb;
    background-color: #fff;
    margin-bottom: 10px;
  }
</style>
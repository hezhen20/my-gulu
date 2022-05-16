// app.js 是整个应用程序的入口，在这里面依赖其他的东西，index.html里面就只引入 app.js

import Vue from 'vue'
import Button from './button'
import Icon from './icon.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
  }
})
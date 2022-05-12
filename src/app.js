// app.js 是整个应用程序的入口，在这里面依赖其他的东西，index.html里面就只引入 app.js

import Vue from 'vue'
import Button from './button'

Vue.component('g-button', Button)

new Vue({
  el: '#app',
})
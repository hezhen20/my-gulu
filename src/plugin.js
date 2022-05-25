import Toast from './toast.vue'
export default {
  install(Vue, option) {
    Vue.prototype.$toast = function(message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message]
      toast.$mount()  // 加载，但是未显示
      document.body.appendChild(toast.$el)
    }
  }
}
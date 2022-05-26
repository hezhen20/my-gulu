import Toast from './toast.vue'
export default {
  install(Vue, option) {
    Vue.prototype.$toast = function(message, toastOptions) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor({
        propsData: {
          closeButton: toastOptions.closeButton,
          autoCloseDelay: toastOptions.autoCloseDelay
        }
      })
      toast.$slots.default = [message]
      toast.$mount()  // 加载，但是未显示
      document.body.appendChild(toast.$el)
    }
  }
}
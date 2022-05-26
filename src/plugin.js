import Toast from './toast.vue'

let currentToast

export default {
  install(Vue, option) {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (currentToast) {
        console.log('旧的toast已关闭');
        currentToast.close()
      }
      currentToast = creatToast({Vue, message, propsData: toastOptions})
    }
  }
}

function creatToast({Vue, message, propsData}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()  // 加载，但是未显示
  document.body.appendChild(toast.$el)
  return toast
}
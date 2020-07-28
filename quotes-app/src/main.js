import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export var eventBus = new Vue({
  data:{
      quotes:[]
    },
})

new Vue({
  render: h => h(App),
}).$mount('#app')

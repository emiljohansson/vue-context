import Vue from 'vue'
import App from './App.vue'
import VueContext from '../../dist/vue-context'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.config.productionTip = false

Vue.use(VueContext)

Vue.component('Foo', Foo)
Vue.component('Bar', Bar)

new Vue({
  render: h => h(App)
}).$mount('#app')

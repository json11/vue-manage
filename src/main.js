import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

import './permission'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);

window.ElementUI= ElementUI;

new Vue({
    el:'#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})


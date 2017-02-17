import Vue from 'vue'
import App from './App'
import Http from 'vue-http'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Http, {
    root: '',
    timeout: 15000,
    loading: (bool)=> {

    },
    error: (msg)=> {
        Vue.alert(msg)
    }
})

Vue.use(ElementUI)
new Vue({
    store,
    router,
    ...App
}).$mount('#app')


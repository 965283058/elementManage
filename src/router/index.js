import Vue from 'vue'
import routes from './map'
import Router from 'vue-router'
Vue.use(Router)
let isFirst=true
let router = new Router({
    mode: 'hash',
    routes: Object.keys(routes).reduce((previous, current) => {
        return (previous.push({path: current, ...routes[current]}), previous)
    }, []),
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})

router.beforeEach(({matched}, from, next) => {
   if(isFirst&&matched.path!="/"){
       isFirst=false
       router.replace("/")
   }
    isFirst=false
    if(window.navigator.onLine===false){
        return Vue.alert({text:"跳转失败，没有网络"})
    }
    matched.filter(({meta}) => meta.title).map(({meta}) => {
        document.title = meta.title
    })
    next()

})

export default router

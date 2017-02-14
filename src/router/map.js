export default {
    '/': {
        meta: {
            title: '主页'
        },
        components:  {
            index:require('pages/index')
        }
    },
    '/login': {//客户
        meta: {
            title: '登录'
        },
        component: (resolve) => {
            require(['pages/user/login'], resolve)
        }
    },
    '/user/search': {//客户
        meta: {
            title: '用户查询'
        },
        components:{
            userSearch: require('pages/user/search')
        }
    }
}

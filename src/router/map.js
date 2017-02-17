export default {
    '/': {
        meta: {
            title: '主页'
        },
        component: (resolve) => {
            require(['pages/index'], resolve)
        },
        children: [
            {
                path: 'wecome',//欢迎
                meta: {
                    title: '欢迎'
                },
                components: {
                    wecome: (resolve) => {
                        require(['pages/wecome'], resolve)
                    }
                }
            },
            {
                path: 'user/search',//个人信息
                meta: {
                    title: '用户查询'
                },
                components: {
                    userSearch: (resolve) => {
                        require(['pages/user/search'], resolve)
                    }
                }
            }
        ]
    },
    '/login': {//客户
        meta: {
            title: '登录'
        },
        component: (resolve) => {
            require(['pages/user/login'], resolve)
        }
    },

}

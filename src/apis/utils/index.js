import Vue from 'vue'
import router from '../../router'

let dev = false;//开发环境
//opts中validateLogin参数 1验证未登录后跳用户登录界面 2跳客户经理主管登录界面
export const post = function (url, params, opts = {}, json = true) {
    if(!window.navigator.onLine){
        return Promise.reject({message: '您的网络不可用'})
    }
    return Vue.http.post(url, params, opts).then(response => {
        if (response.code !== 0&&response.code) {
            if (response.code === 1) {
                return Promise.reject(response)
            } else if (response.code === 10) {
                if (dev) {
                    console.info("服务故障--10", response)
                }
                return Promise.reject({"message": "服务故障，请稍后再试！"});
            } else if (response.code === 20) {
                if (dev) {
                    console.info("参数有问题--20", response)
                    return Promise.reject(response);
                } else {
                    return Promise.reject({"message": "页面出错了，请稍后再试！"});
                }
            } else if (response.code === -1) {
                Vue.alert({
                    text:"登录失效，请重新登录！",
                    hide:()=>{
                        if (opts.validateLogin === 1) {
                            router.push("/account/login")
                            return
                        } else {
                            router.push("/staff/login")
                        }
                        return Promise.resolve({})
                    }
                })
            }
        } else {
            return Promise.resolve(JSON.parse(response.request.response))
        }
    }, response => {
        // 处理http状态码
        if(`${response.status}`.charAt(0) === '4') {
            return Promise.reject({message: '请求资源不存在'})
        } else if(`${response.status}`.charAt(0) === '5') {
            return Promise.reject({message: '服务器繁忙，请稍后再试'})
        }
    })
}

export const get = function (url, params, opts = {}) {
    if(!window.navigator.onLine){
        return Promise.reject({message: '您的网络不可用'})
    }
    return Vue.http.get(url, Object.assign({}, {params: params}, opts)).then(response => {
        if (response.code !== 0) {
            if (response.code === 1) {
                return Promise.reject(response)
            } else if (response.code === 10) {
                if (dev) {
                    console.info("服务故障--10", response)
                }
                return Promise.reject({"message": "服务故障，请稍后再试！"});
            } else if (response.code === 20) {
                if (dev) {
                    console.info("参数有问题--20", response)
                    return Promise.reject(response);
                } else {
                    return Promise.reject({"message": "页面出错了，请稍后再试！"});
                }
            } else if (response.code === -1) {
                Vue.alert({
                    text:"登录失效，请重新登录！",
                    hide:()=>{
                        if (opts.validateLogin === 1) {
                            router.push("/account/login")
                            return
                        } else {
                            router.push("/staff/login")
                        }
                        return Promise.resolve({})
                    }
                })

            }
        } else {
            return Promise.resolve(response.data)
        }
    }, response => {
        // 处理http状态码
        if(`${response.status}`.charAt(0) === '4') {
            return Promise.reject({message: '请求资源不存在'})
        } else if(`${response.status}`.charAt(0) === '5') {
            return Promise.reject({message: '服务器繁忙，请稍后再试'})
        }
    })
}
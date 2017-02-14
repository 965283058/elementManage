import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        preOrderId: ""
    },
    mutations: {
        updatePreOrderId (state, preOrderId) {
            // 变更状态
            // state.preOrderId = preOrderId
        }
    },
    /*actions: {
        updataUser (context) {
            context.commit('updataUser')
        }
    }*/
})

export default store

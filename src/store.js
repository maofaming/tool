import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isWxAuth: false,
    },
    mutations: {
        setWxAuth(state, bool) {
            state.isWxAuth = !!bool
        },
    },
    actions: {}
})

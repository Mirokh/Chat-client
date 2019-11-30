import Vue from 'vue'
import Vuex from 'vuex'
import auth from './store/auth'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: auth
    },
    state: {},
    mutations: {},
    actions: {
    },
    plugins: [createPersistedState()]
})

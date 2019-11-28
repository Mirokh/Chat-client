module.exports = {
    state: {
        auth: {
            user: null,
            check: false,
        },
    },
    mutations: {
        LOGIN_USER: (state, payload) => {
            state.auth.user = payload;
            state.auth.check = true;
        },
        LOG_OUT_USER: () => {
            state.auth.user = null;
            state.auth.check = false;
        }
    },

    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    }
};


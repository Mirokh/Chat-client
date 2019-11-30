const auth = {
    namespaced: true,
    state: {
        user: null,
        check: false,
    },
    mutations: {
        LOGIN_USER: (state, payload) => {
            state.user = payload;
            state.check = true;
        },
        LOGOUT_USER: (state) => {
            state.user = null;
            state.check = false;
        }
    },
    getters: {},
};

export default auth
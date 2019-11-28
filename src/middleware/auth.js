import store from '../store.js'

export default function auth({next, router}) {
    if (!store.state.auth.check) {
        return router.push({name: 'login'});
    }
    console.log('sss')
    return next();
}
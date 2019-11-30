<template>
    <v-app>
        <sidebar></sidebar>
        <transition name="page" mode="out-in">
            <keep-alive>
                <router-view style="padding-top: 64px"></router-view>
            </keep-alive>
        </transition>
    </v-app>
</template>

<script>
    import sidebar from './components/Sidebar'

    export default {
        name: 'App',
        components: {
            'sidebar': sidebar
        },
        data: () => ({
            //
        }),
    };
</script>

<style>
    .page-enter-active, .page-leave-active {
        transition: opacity .2s, transform .2s;
    }

    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateY(-1%);
    }
</style>

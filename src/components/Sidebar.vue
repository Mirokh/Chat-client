<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
            </v-toolbar-title>
            <v-toolbar-items v-if="auth.check" class="ml-2">
                <v-btn to="chat" text>Conversations</v-btn>
                <v-btn to="/" text>Home</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items v-if="!auth.check">
                <v-btn to="login" text>Login</v-btn>
                <v-btn to="signup" text>Signup</v-btn>
            </v-toolbar-items>
            <v-toolbar-items v-else>
                <v-btn text @click="logout">Logout</v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        computed: {
            auth() {
                return this.$store.state.auth
            }
        },
        methods: {
            logout() {
                this.$store.commit('auth/LOGOUT_USER');
                this.$router.push({
                    path: 'login'
                })
            },
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="col-md-4 offset-md-4 mt-12">
        <v-form
                ref="form"
                v-model="valid"
        >

            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    required
            ></v-text-field>

            <v-checkbox
                    v-model="checkbox"
                    label="Remember"
            ></v-checkbox>

            <v-btn
                    :disabled="!valid"
                    color="success"
                    class="float-right"
                    @click="submit"
            >
                Login
            </v-btn>
        </v-form>
        <div class="text-center ma-2">
            <v-snackbar
                    v-model="snackbar"
                    :right="true"
                    color="error"
            >
                {{ snackbar_text }}
                <v-btn
                        color="white"
                        text
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </div>
        <v-overlay :value="loader">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            loader: false,
            loginUrl: 'users/login',
            valid: false,
            email: 'mirokhach@gmail.com',
            password: "adcdevbox",
            passwordRules: [
                v => !!v || 'Name is required',
                v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            checkbox: false,
            snackbar: false,
            snackbar_text: '',
        }),

        methods: {
            async submit() {
                this.loader = true;
                var response = await this.$http
                    .post(this.loginUrl, {
                        email: this.email,
                        password: this.password,
                    })
                    .then((response) => response.data)
                    .catch((err) => {
                        this.snackbar_text = err.response.data.message;
                        this.snackbar = true;
                    });
                this.loader = false;
                if (response) {
                    $cookies.set('authorization', 'Bearer ' + response.token);
                    this.$store.commit('auth/LOGIN_USER', response.user);
                    this.$router.push({
                        path: '/'
                    })
                }
            },
        },
    }
</script>

<style scoped>

</style>
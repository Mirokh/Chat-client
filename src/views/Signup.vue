<template>
    <div class="col-md-4 offset-md-4">
        <v-form
                ref="form"
                v-model="valid"
        >
            <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
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
    </div>
</template>

<script>
    export default {
        name: "Login",
        data: () => ({
            loginUrl: 'users/login',
            valid: false,
            name: "",
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            checkbox: false,
        }),

        methods: {
            async submit() {
                var response = await this.$http
                    .post(this.loginUrl)
                    .then((response) => response.data)
                    .catch((err) => {
                        console.log(err.response);
                    });

                $cookies.set('authorization', 'Bearer ' + response.token);
                this.$store.commit('LOGIN_USER', response.user);
            },
        },
    }
</script>

<style scoped>

</style>
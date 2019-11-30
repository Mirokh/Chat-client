<template>
    <div class="col-md-4 offset-md-4 mt-12">
        <v-form
                ref="form"
                v-model="valid"
        >
            <v-text-field
                    v-model="first_name"
                    :rules="first_name_rules"
                    label="First name"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="last_name"
                    :rules="last_name_rules"
                    label="Last name"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="email"
                    :rules="email_rules"
                    label="E-mail"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="phone_number"
                    :rules="phone_number_rules"
                    label="Phone number"
                    required
            ></v-text-field>


            <v-text-field
                    v-model="password"
                    :rules="password_rules"
                    label="Password"
                    required
            ></v-text-field>

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
        name: "Signup",
        data: () => ({
            loader: false,
            loginUrl: 'users/signup',
            valid: false,
            first_name: "Mihran",
            last_name: "Khachatryan",
            email: 'mirokhach@gmail.com122',
            phone_number: '095063920',
            password: 'adcdevbox',
            snackbar: false,
            snackbar_text: '',
            first_name_rules: [
                v => !!v || 'First name is required',
                v => (v && v.length >= 2) || 'First name must be at least 2 characters',
            ],
            last_name_rules: [
                v => !!v || 'Last name is required',
                v => (v && v.length >= 2) || 'Last name must be must be at least 2 characters',
            ],
            email_rules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            phone_number_rules: [
                v => !!v || 'Phone number is required',
            ],
            password_rules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be at least 6 characters',
            ],
        }),

        methods: {
            async submit() {
                this.loader = true;
                var response = await this.$http
                    .post(this.loginUrl, {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        phone_number: this.phone_number,
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
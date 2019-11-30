<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-text-field
                v-model="message"
                outlined
                clearable
                label="Message"
                type="text"
                v-on:keyup.enter="submitMessage"
        >
            <template v-slot:prepend>
                <v-tooltip
                        bottom
                >
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on">mdi-help-circle-outline</v-icon>
                    </template>
                    I'm a tooltip
                </v-tooltip>
            </template>
            <template v-slot:append>
                <v-fade-transition leave-absolute>
                    <v-progress-circular
                            v-if="loading"
                            size="24"
                            color="info"
                            indeterminate
                    ></v-progress-circular>
                    <img v-else width="24" height="24" src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                         alt="">
                </v-fade-transition>
            </template>
        </v-text-field>
    </div>
</template>

<script>
    export default {
        name: "Input",
        data: () => ({
            loading: false,
            message: '',
        }),
        computed: {
            author() {
                return this.$store.state.auth.user;
            }
        },
        methods: {
            async submitMessage() {
                if (!this.message.length) return;
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.message = ''
                }, 500);
                this.$emit('update-messages', {text: this.message, author: this.author})
            }
        }
    }
</script>

<style scoped>

</style>
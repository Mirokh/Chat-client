<template>
    <div class="message-list">
        <v-alert
                transition="scroll-x-transition"
                class="message-item py-3 px-4"
                v-bind:class="{'ml-auto': author.id === message.author.id,'mr-auto': author.id !== message.author.id }"
                max-width="400"
                color="cyan"
                :border="author.id !== message.author.id ? 'left' : 'right'"
                elevation="1"
                colored-border
                v-for="message of messages"
        >
            <template v-slot:append>
                <v-avatar size="45" class="ml-2">
                    <img
                            src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                            alt="avatar"
                    >
                </v-avatar>
            </template>
            {{message.text}}

        </v-alert>
    </div>
</template>

<script>

    export default {
        name: "Messages",
        props: ['message', 'room'],
        data: () => ({
            messages: [],
        }),
        watch: {
            message: function (val) {
                this.messages.push(val);
                this.$vuetify.goTo(9999, {
                    duration: 2000,
                    offset: 0,
                    container: '.chat-content'
                })
            },
        },
        computed: {
            author() {
                return this.$store.state.auth.user;
            }
        },
        methods: {}
    }
</script>

<style>


</style>
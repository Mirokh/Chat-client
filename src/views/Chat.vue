<template>
    <div>
        <v-row no-gutters class="users-bar">
            <v-col cols="12" sm="1">
            </v-col>
            <v-col cols="12" sm="7">
                <div class="chat-content pt-3 pr-3" style="overflow-y: scroll">
                    <messages :message="message" :room="room"></messages>
                </div>
                <message-input class="pt-3" @update-messages="sendMessage"></message-input>
            </v-col>
            <v-col cols="12" sm="4">
                <users-sidebar @change-room="changeRoom"></users-sidebar>
            </v-col>
        </v-row>
    </div>
</template>

<script>

    import Messages from '../components/chat/Messages'
    import Input from '../components/chat/Input'
    import UsersSidebar from '../components/chat/UsersSidebar'
    import io from 'socket.io-client';

    export default {
        name: "Chat",
        components: {
            'messages': Messages,
            'message-input': Input,
            'users-sidebar': UsersSidebar
        },
        data: () => ({
            messageApi: '',
            room: null,
            user: '',
            message: '',
            messages: [],
            socket: io('localhost:3000')
        }),
        methods: {
            sendMessage(message) {
                this.socket.emit('SEND_MESSAGE', message);
            },
            changeRoom(room) {
                alert('room changed - ' + room.title);
                this.room = room
            },
        },
        mounted() {
            this.socket.on('MESSAGE', (data) => {
                this.message = data;
                console.log(data);
            });
        }
    }
</script>

<style scoped>
    .users-bar {
        height: calc(100vh - 64px);
    }

    .chat-content {
        height: calc(100vh - 86px - 64px - 12px);
    }

    .chat-content::-webkit-scrollbar-track {
        background-color: #F5F5F5;
    }

    .chat-content::-webkit-scrollbar {
        width: 2px;
        background-color: #F5F5F5;
    }

    .chat-content::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.08);
        border: 0 solid #555555;
    }
</style>
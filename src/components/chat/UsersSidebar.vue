<template>
    <v-card
            height="100%"
            class="ml-auto"
            max-width="400"
            tile
    >
        <v-list shaped>
            <v-subheader>MESSAGES</v-subheader>
            <v-list-item-group
                    v-model="room"
                    color="primary"
                    :avatar="true"
            >
                <v-list-item
                        v-for="(room, i) in rooms"
                        :key="i"
                        @click="changeRoom(i)"
                >
                    <v-list-item-avatar>
                        <v-img :src="room.avatar"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-html="room.title"></v-list-item-title>
                        <v-list-item-subtitle v-html="room.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            <search-users></search-users>
        </v-list>
    </v-card>
</template>

<script>
    import SearchUser from './SearchUser'

    export default {
        name: "UsersSidebar",
        components: {
            'search-users': SearchUser
        },
        data: () => ({
            room: 0,
            rooms: [
                {
                    type: 'single',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Brunch this weekend?',
                    subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                },
                {
                    type: 'single',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ',
                    subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
                },
                {
                    type: 'single',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
                },
                {
                    type: 'single',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Birthday gift',
                    subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
                },
                {
                    type: 'single',
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Recipe to try',
                    subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
                },
            ],
        }),
        methods: {
            changeRoom(room) {
                this.room = room;
                console.log(room);
                this.$emit('change-room', this.rooms[this.room])
            }
        }
    }
</script>

<style scoped>

</style>
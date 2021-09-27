<template lang="pug">
v-card
    v-app-bar(color='deep-purple' dark='')
        v-app-bar-nav-icon#mobile(@click='drawer = true')
        v-toolbar-title Cyprien Taib
        //
            <v-card v-model="group" dark>
            <v-container
            v-model="group"
            active-class="deep-purple--text text--accent-4"
            >
            <v-card v-model="group">
            <v-card-title> <router-link to="/">Home </router-link> </v-card-title>
            </v-card>
            <v-card v-model="group">
            <v-card-title> <router-link to="/about">About </router-link> </v-card-title>
            </v-card>
            </v-container>
            </v-card>
    v-navigation-drawer(v-model='drawer' absolute='' temporary='' height='100vh' dark='' @open='drawer = true')
        v-list(nav='' dense='')
        v-list-item-group(v-model='group' active-class='deep-purple--text text--accent-4')
            router-link(to='/')
            v-list-item
                v-list-item-icon
                v-icon mdi-home
                v-list-item-title Home
            router-link(to='/about')
            v-list-item
                v-list-item-icon
                v-icon mdi-account
                v-list-item-title About

</template>

<script>
export default {
  name: 'NavBar',
    data: () => ({
        drawer: false,
        group: null,
    })
};
</script>


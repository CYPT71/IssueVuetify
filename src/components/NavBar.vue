<template lang="pug">
v-app
  v-navigation-drawer(v-model='sidebar' app='')
    v-list
      v-list-tile(v-for='item in menuItems' :key='item.title' :to='item.path')
        v-list-tile-action
          v-icon {{ item.icon }}
        v-list-tile-content {{ item.title }}
  v-toolbar(app='')
    span.hidden-sm-and-up
      v-toolbar-side-icon(@click='sidebar = !sidebar')
    v-toolbar-title
      router-link(to='/' tag='span' style='cursor: pointer')
        | {{ appTitle }}
    v-spacer
    v-toolbar-items.hidden-xs-only
      v-btn(flat='' v-for='item in menuItems' :key='item.title' :to='item.path')
        v-icon(left='' dark='') {{ item.icon }}
        |           {{ item.title }}

</template>

<script>
export default {
  name: "App",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' }
     ]
    }
  },
};
</script>


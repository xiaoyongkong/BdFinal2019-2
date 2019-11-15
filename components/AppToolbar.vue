<template>
  <div>
    <v-app-bar
      color="primary"
      fixed
      dark
      app
    >
      <v-btn icon @click.stop="toggleDrawer()">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon href="https://github.com/xiaoyongkong/BdFinal2019-2">
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
  import Util from '@/util';

  export default {
    name: 'app-toolbar',
    computed: {
      toolbarColor() {
        return this.$vuetify.options.extra.mainNav;
      }
    },
    methods: {
      toggleDrawer() {
        this.$store.commit('toggleDrawer')
      },
      handleFullScreen() {
        Util.toggleFullScreen();
      },
      handleLogout() {
        this.$router.push('/login');
      }
    }
  };
</script>

<style lang="sass">
  
</style>
<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    :dark="$vuetify.dark"
    app
    v-model="drawer"
    width="260"
  >
    <v-toolbar color="primary darken-1" dark>
      <v-toolbar-title class="ml-0 pl-3">
        <span>IMDb Data</span>
      </v-toolbar-title>
    </v-toolbar>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>
<script>

  export default {
    name: 'app-drawer',
    props: {
      expanded: {
        type: Boolean,
        default: true
      },
    },
    data: () => ({
      mini: false,
      items: [
        { title: 'Geral', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'Filmes', icon: 'mdi-movie', to: '/filmes' },
        { title: 'Grupo', icon: 'mdi-account-multiple', to: '/grupo' },
      ],
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }),
    computed: {
      drawer: {
        get() {
          return this.$store.state.drawer
        },
        set(val) {
          this.$store.commit('drawer', val)
        }
      },
      computeGroupActive() {
        return true;
      },
      sideToolbarColor() {
        return this.$vuetify.options.extra.sideNav;
      }
    },
    methods: {
      genChildTarget(item, subItem) {
        if (subItem.href) return;
        if (subItem.component) {
          return {
            name: subItem.component,
          };
        }
        return {name: `${item.group}/${(subItem.name)}`};
      },
    }
  };
</script>


<style lang="sass">
#appDrawer
  overflow: hidden
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>

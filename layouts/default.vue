<template>
  <v-app>
    <app-toolbar/>
    <app-drawer/>
    <v-content>
      <transition name="slide-left" mode="out-in">
        <nuxt />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
import AppDrawer from '@/components/AppDrawer'
export default {
  components: {
    AppToolbar,
    AppDrawer
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

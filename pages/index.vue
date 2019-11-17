<style>
   @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

    #app {
      font-family: 'Raleway', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #000000;
      background: #D9D8D7;
    }

    .inicio_title {
      color: black;
      margin-top: 10%;
      font-size: 3em;
    }
</style>

<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
    <v-spacer/>
    <h1 class='inicio_title'>Visualização Gráfica</h1>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>



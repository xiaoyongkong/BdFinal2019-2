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
      font-size: 3em;
    }
</style>

<template>
  <v-container class="d-flex flex-column fill-height align-center justify-center">
    <div class='inicio_title'>Visualização Gráfica</div>
    <div class="d-flex flex-wrap">
      <adult-movies-card class="mx-2"/>
      <movies-by-year-card class="mx-2"/>
    </div>
  </v-container>
</template>

<script>
import AdultMoviesCard from '@/components/Cards/AdultMoviesCard'
import MoviesByYearCard from '@/components/Cards/MoviesByYearCard'

export default {
  components: {
    AdultMoviesCard,
    MoviesByYearCard
  }
}
</script>



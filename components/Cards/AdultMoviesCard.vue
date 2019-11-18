<template>
  <v-card>
    <v-card-title>
      Títulos Adultos
    </v-card-title>
    <v-card-subtitle>
      Quantidade de títulos adultos
    </v-card-subtitle>
    <v-card-text>
      <adult-movies />
    </v-card-text>
  </v-card>
</template>

<script>
import AdultMovies from '@/components/Graphs/AdultMovies'

export default {
  components: {
    AdultMovies
  },
}
</script>
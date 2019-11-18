<template>
  <v-card>
    <v-card-title>
      Títulos por década
    </v-card-title>
    <v-card-subtitle>
      Quantidade de títulos lançados por década
    </v-card-subtitle>
    <v-card-text>
      <movies-by-year />
    </v-card-text>
  </v-card>
</template>

<script>
import MoviesByYear from '@/components/Graphs/MoviesByYear'

export default {
  components: {
    MoviesByYear
  },
}
</script>
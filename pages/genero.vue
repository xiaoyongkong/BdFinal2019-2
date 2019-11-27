<template>
  <v-container class="d-flex fill-height flex-column align-center justify-center">
    <p style='font-size: 1.5em;'> Número de episódio de cada gênero </p>
    <v-progress-circular v-if="loading" indeterminate />
    <v-data-table v-else
      :headers="genre_headers"
      :items="genre"
      :items-per-page="5"
      class="elevation-1"
    />
    <div style='margin-top: 5%;'>
      <p style='font-size: 1.5em;'> Gênero e titulo de cada filme </p>
      <v-progress-circular v-if="loading" indeterminate />
      <v-data-table v-else
        :headers="genre_movies_headers"
        :items="genre_movies"
        :items-per-page="5"
        class="elevation-1"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    genre: [],
    genre_headers: [],
    genre_movies: [],
    genre_movies_headers: []
  }),

  created() {
    this.$axios.get('http://localhost:3030/movies/query4').then(r => {
      this.genre = r.data.data
      this.genre_headers = r.data.fields.map(m => {
        return({
          text: m.name,
          sortable: false,
          value: m.name
        })
      })
      
      this.loading = false
    }).catch(e => {
      console.log('ERROR')
    })
    /*this.$axios.get('http://localhost:3030/movies/query5').then(r => {
      this.genre_movies = r.data.data
      this.genre_movies_headers = r.data.fields.map(m => {
        return({
          text: m.name,
          sortable: false,
          value: m.name
        })
      })
      
      this.loading = false
    }).catch(e => {
      console.log('ERROR')
    }) */
  }
}
</script>
<template>
  <v-container class="d-flex fill-height flex-column align-center justify-center">
    <p style='font-size: 1.5em;'>Nome dos programas que não tem episódio </p>
    <v-progress-circular v-if="loading" indeterminate />
    <v-data-table v-else
      :headers="no_episode_headers"
      :items="no_episode"
      :items-per-page="5"
      class="elevation-1"
    />
    <div style='margin-top: 5%;'>
      <p style='font-size: 1.5em;'> Titulo e ano de lançamento dos filmes </p>
      <v-progress-circular v-if="loading" indeterminate />
      <v-data-table v-else
        :headers="headers"
        :items="movies"
        :items-per-page="5"
        class="elevation-1"
      />
    </div>
    <div style='margin-top: 5%;'>
      <p style='font-size: 1.5em;'> Titulos dos filmes ordenado pela nota </p>
      <v-progress-circular v-if="loading" indeterminate />
      <v-data-table v-else
        :headers="rank_headers"
        :items="rank"
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
    movies: [],
    headers: [],
    rank: [],
    rank_headers: [],
    no_episode: [],
    no_episode_headers: [],
  }),

  created() {
    this.$axios.get('http://localhost:3030/movies/query1').then(r => {
      this.movies = r.data.data
      this.headers = r.data.fields.map(m => {
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
    
    this.$axios.get('http://localhost:3030/movies/query3').then(r => {
      this.rank = r.data.data
      this.rank_headers = r.data.fields.map(m => {
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
    this.$axios.get('http://localhost:3030/movies/query6').then(r => {
      this.no_episode = r.data.data
      this.no_episode_headers = r.data.fields.map(m => {
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
  }
}
</script>
<template>
  <v-container class="d-flex fill-height flex-column align-center justify-center">
    
    <v-progress-circular v-if="loading" indeterminate />
    <v-data-table v-else
      :headers="headers"
      :items="movies"
      :items-per-page="10"
      class="elevation-1"
    />
    <!--
    <v-row
      :align="alignment"
      :justify="justify"
      style="height: 300px;"
    >
      <v-card v-for="movie in movies"
        style='margin-top:2%; margin-left: 5%'
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
           
            <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-row>-->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: true,
    movies: [],
    headers: []
  }),

  created() {
    this.$axios.get('http://localhost:3030/movies').then(r => {
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
  }
}
</script>
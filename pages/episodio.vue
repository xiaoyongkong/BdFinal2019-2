<template>
  <v-container class="d-flex fill-height flex-column align-center justify-center">
    <p style='font-size: 1.5em;'> Nome dos programas e número de episódios </p>
    <v-progress-circular v-if="loading" indeterminate />
    <v-data-table v-else
      :headers="headers"
      :items="name_serie"
      :items-per-page="5"
      class="elevation-1"
    />
    <div style='margin-top: 5%;'>
      <p style='font-size: 1.5em;'> Número máximo de episódios do Catálogo </p>
      <v-progress-circular v-if="loading" indeterminate />
      <v-data-table v-else
        :headers="catalogo_headers"
        :items="catalogo"
        :items-per-page="5"
        class="elevation-1"
      />
    </div>
    <div style='margin-top: 5%;'>
      <p style='font-size: 1.5em;'> Titulos, episodios, temporadas, lançamento e se é adulto e temporadas de cada filme </p>
      <v-progress-circular v-if="loading" indeterminate />
      <v-data-table v-else
        :headers="adult_headers"
        :items="adult"
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
    name_serie: [],
    headers: [],
    catalogo: [],
    catalogo_headers: [],
    adult: [],
    adult_headers: []
  }),

  created() {
    this.$axios.get('http://localhost:3030/movies/query8').then(r => {
      this.name_serie = r.data.data
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
    this.$axios.get('http://localhost:3030/movies/query10').then(r => {
      this.catalogo = r.data.data
      this.catalogo_headers = r.data.fields.map(m => {
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
    this.$axios.get('http://localhost:3030/movies/query2').then(r => {
      this.adult = r.data.data
      this.adult_headers = r.data.fields.map(m => {
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
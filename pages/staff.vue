<template>
  <v-container class="d-flex fill-height flex-column align-center justify-center">
    <p style='font-size: 1.5em;'> Funconários que nasceram no mesmo ano do mais velho </p>
    <v-progress-circular v-if="loading" indeterminate />
    <v-data-table v-else
      :headers="headers"
      :items="namestaff"
      :items-per-page="5"
      class="elevation-1"
    />

    <div style='margin-top: 5%;'>
      <p style='font-size: 1.5em;'> Número de pessoas em cada Titulo </p>
      <v-progress-circular v-if="loading" indeterminate />
      <v-data-table v-else
        :headers="num_headers"
        :items="num"
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
    namestaff: [],
    headers: [], 
    num: [],
    num_headers: []
  }),

  created() {
    this.$axios.get('http://localhost:3030/movies/query7').then(r => {
      this.namestaff = r.data.data
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
    this.$axios.get('http://localhost:3030/movies/query9').then(r => {
      this.num = r.data.data
      this.num_headers = r.data.fields.map(m => {
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
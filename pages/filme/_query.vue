<template>
  <div>
    <div class="red">
      {{data}}
    </div>
    <div class="green">
      {{fields}}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: [],
    fields: []
  }),
  created() {
    this.$axios.get('http://localhost:3030/movies/query' + this.$route.params.query).then(r => {
      this.data = r.data.data
      this.fields = r.data.fields
      
      this.loading = false
    }).catch(e => {
      console.log('ERROR')
    })
  }
}
</script>
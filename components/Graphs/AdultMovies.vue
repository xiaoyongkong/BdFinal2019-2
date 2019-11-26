<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data:() => ({
    chartdata: {
      labels: ['Adultos', 'Não Adultos'],
      datasets: [
        {
          backgroundColor: ['#f87979', '#7b9ca6'],
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          fontColor: 'white'
        }
      }
    }
  }),
  mounted () {
    this.$axios.get('http://localhost:3030/movies/countAdultMovies').then(r => {
      console.log(r)
      this.chartdata.datasets[0].data[0] = r.data.data[0]['COUNT(*)']
      this.$axios.get('http://localhost:3030/movies/countNonAdultMovies').then(r => {
        this.chartdata.datasets[0].data[1] = r.data.data[0]['COUNT(*)']
        this.renderChart(this.chartdata, this.options)
      }).catch(e => {
        console.log(e)
      })
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ["10's", "20's", "30's", "40's", "50's", "60's", "70's", "80's", "90's", "2000's", "2010's"],
      datasets: [
        {
          backgroundColor: '#f87979',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }),

  async mounted () {
    await this.loadData()
  },

  methods: {
    loadData() {
      return new Promise((resolve, reject) => {
        for(let i = 0; i < 11; i++) {
          this.$axios.get('http://localhost:3030/movies/countMoviesBy10Years/' + (1910 + 10*i)).then(r => {
            this.chartdata.datasets[0].data[i] = r.data.data[0]['COUNT(*)']
            if(i == 10) this.renderChart(this.chartdata, this.options)
          })
        }
      })
    }
  }
}
</script>
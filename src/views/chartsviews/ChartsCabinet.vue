<template>
  <div>

  </div>
</template>

<script>
  import HchartCompontent from './../components/HighchartsComponent.vue'
//  import ChartShowCard from './../components/ChartShowCard.vue'

  export default {
    data() {
      return {
        styles: {
//              width: 600,
//              height: 400
        },

        options: {
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          yAxis: {
            title: {
              text: 'Temperature'
            },
            lineWidth: 2,
            lineColor: '#F33',
            id: 'temperature-axis'
          },
          series: [{
            name: 'Temperature',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            color: '#F33'
          }]
        },



      }
    },
    created() {

    },
    mounted() {

    },
    mounted() {

    },
    watch: {},
    methods: {},
    computed: {},
    components: {
      HchartCompontent,
//      ChartShowCard,
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 400px;
    display: inline-block;
    border: 1px solid #ccc;
    overflow: hidden;
    position: relative;

    h3 {
      position: absolute;
      top: -10px;
      left: 10px;
      z-index: 1000;
    }
  }
</style>

<template>
    <div class="highcharts-container"></div>
</template>

<script>
  import * as Highcharts from 'highcharts';
  // 加载 Highstock 或 Highmaps 方式类似
  // import Highcharts from 'highcharts/highstock';


  // 加载导出模块
  import * as Exporting from 'highcharts/modules/exporting';
  import * as HighchartsMore from 'highcharts/highcharts-more';
  import * as HeatMap from  'highcharts/modules/heatmap';
//  import * as Variwide from  'highcharts/modules/variwide'
  // 初始化导出模块
  Exporting(Highcharts);
  HighchartsMore(Highcharts);
  HeatMap(Highcharts);
//  Variwide(Highcharts)
  export default {
    props: ['options', 'styles','afterSuccess'],
    name: 'highcharts',
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        console.log("this.el", this.$el);
//        this.$el.style.width = (this.styles.width || 800) + 'px';
        this.$el.style.height = (this.styles.height || 400) + 'px';
        this.chart = new Highcharts.Chart(this.$el, this.options,this.afterSuccess);
      }
    }
  }
</script>

<style>
  .highcharts-credits {
    display: none;
  }

  .highcharts-container {

  }


</style>

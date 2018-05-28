<template>

<div>
  <chart-show-card>
    <hchart-compontent :options="options0" :styles="styles0" ref="simpleChart1" :afterSuccess="afterSuccess"></hchart-compontent>
  </chart-show-card>

  <chart-show-card>
    <hchart-compontent :options="options1" :styles="styles1" ref="simpleChart1"></hchart-compontent>
  </chart-show-card>

  <chart-show-card>
    <hchart-compontent :options="options2" :styles="styles2" ref="simpleChart2"></hchart-compontent>
  </chart-show-card>

  <chart-show-card>
    <hchart-compontent :options="options3" :styles="styles3" ref="simpleChart3"></hchart-compontent>
  </chart-show-card>

  <chart-show-card>
    <hchart-compontent :options="options4" :styles="styles4" ref="simpleChart4"></hchart-compontent>
  </chart-show-card>

  <chart-show-card>
    <hchart-compontent :options="options5" :styles="styles5" ref="simpleChart5"></hchart-compontent>
  </chart-show-card>
  <chart-show-card>
    <hchart-compontent :options="options6" :styles="styles6" ref="simpleChart6"></hchart-compontent>
  </chart-show-card>

  <chart-show-card>
    <hchart-compontent :options="options7" :styles="styles7" ref="simpleChart6"></hchart-compontent>
  </chart-show-card>

</div>

</template>
<script>
  import HchartCompontent from './../components/HighchartsComponent.vue'
  import ChartShowCard from './../components/ChartShowCard.vue'

  import * as Highcharts from 'highcharts';
  export default {
    name: '',
    data() {
      return {
        options0:{
          chart: {
            spacing : [40, 0 , 40, 0]
          },
          title: {
            floating:true,
            text: '学员：雷锋的考试完成情况'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
//                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
              },
              point: {
                events: {
                  mouseOver: function(e) {  // 鼠标滑过时动态更新标题
                    // 标题更新函数，API 地址：https://api.hcharts.cn/highcharts#Chart.setTitle
//                    chart.setTitle({
//                      text: e.target.name+ '\t'+ e.target.y + ' %'
//                    });
                  }
                  //,
                  // click: function(e) { // 同样的可以在点击事件里处理
                  //     chart.setTitle({
                  //         text: e.point.name+ '\t'+ e.point.y + ' %'
                  //     });
                  // }
                }
              },
            }
          },
          series: [{
            type: 'pie',
            innerSize: '80%',
            name: '完成情况',
            data: [
              {name:'按时完成',y: 3},
              {name:'迟到完成',y: 2,sliced: true,selected: true,},
              {name: '未完成',y: 5},

            ]
          }]
        },
        styles0:{

        },
        afterSuccess:function(c) {
          // 图表初始化完毕后的会掉函数
          // 环形图圆心
          var centerY = c.series[0].center[1],
            titleHeight = parseInt(c.title.styles.fontSize);
          // 动态设置标题位置
          c.setTitle({
            y:centerY + titleHeight/2
          });
        },
        options1:{
          title: {
            text: '考试完情况'
          },
          xAxis: {
            categories: ['雷锋', ' 胡品', '文卡', 'SUE', '陈阳','王建宝','蒋双北','张业伟','丁仲鹏','于绍楠']
          },
          yAxis: {
            min: 0,
            title: {
              text: '次数'
            }
          },
          plotOptions: {
            series: {
              stacking: 'normal'
            }
          },
          labels: {
//            items: [{
//              html: '水果消耗',
//              style: {
//                left: '100px',
//                top: '18px',
//                color:  'black'
//              }
//            }]
          },
          series: [{
            type: 'column',
            name: '高于平均水平',
            data: [3, 9, 6, 8, 8,3, 7, 8, 10, 4],
            color:'#7CB5EC'
          }, {
            type: 'column',
            name: '低于平均水平',
            data: [2, 1, 1, 0, 1,3, 0, 2, 0, 5],
            color:'#A4FB91'
          }, {
            type: 'column',
            name: '未完成次数',
            data: [5, 0, 3, 2, 1,4, 3, 0, 0, 1],
            color:'#434348'
          }

//          , {
//            type: 'pie',
//            name: '总的消耗',
//            data: [{
//              name: '小张',
//              y: 13,
//            }, {
//              name: '小潘',
//              y: 23,
//            }, {
//              name: '小王',
//              y: 19,
//            }],
//            center: [100, 80],
//            size: 100,
//            showInLegend: false,
//            dataLabels: {
//              enabled: false
//            }
//          }


          ]
        },
        styles1: {
        },
        options2:{
          chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
          },
          title: {
            text: '学员的课程参与情况'
          },
          xAxis: {
            categories: ['雷锋', ' 胡品', '文卡', 'SUE', '陈阳','王建宝','蒋双北','张业伟','丁仲鹏','于绍楠']
          },
          yAxis: {
            categories: ['按时完成', '迟到完成', '未完成'],
            title: null
          },
          colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
//            maxColor: Highcharts.getOptions().colors[0]
          },
          legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
          },
          tooltip: {
            formatter: function () {
              return '<b>' + this.series.xAxis.categories[this.point.x] + '</b>  <br><b>' +
                '<b>'+this.series.yAxis.categories[this.point.y]+'</b><br>'+this.point.value + '</b> 次';
            }
          },
          series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [
              [0, 0, 3], [0, 2, 1], [0, 2, 5],
              [1, 0, 9], [1, 1, 1], [1, 2, 0],
              [2, 0, 6], [2, 1, 1], [2, 2, 3],
              [3, 0, 8], [3, 1, 0], [3, 2, 2],
              [4, 0, 8], [4, 1, 1], [4, 2, 1],
              [5, 0, 3], [5, 1, 3], [5, 2, 4],
              [6, 0, 7], [6, 1, 0], [6, 2, 3],
              [7, 0, 8], [7, 1, 2], [7, 2, 0],
              [8, 0, 10], [8, 1, 0], [8, 2, 0],
              [9, 0, 4], [9, 1, 5], [9, 2, 1],
            ],


            dataLabels: {
              enabled: true,
              color: '#000000'
            }
          }]
        },
        styles2:{

        },
        options3: {
          chart: {
            type: 'column'
          },
          title: {
            text: '学员：雷锋个人能力图'
          },
          subtitle: {
            text: '学员学习前后自我效能提升图'
          },
          xAxis: {
            categories: [
              '效能1','效能2','效能3','效能4'
            ],
            crosshair: true
          },

          yAxis: {
            min: 0,
            title: {
              text: '效能值'
            }
          },
          tooltip: {
            // head + 每个 point + footer 拼接成完整的 table
            headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0">{point.y:.1f}</td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              pointPadding: 0.02,
              borderWidth: 0,
//              pointWidth:40, //柱子宽度

            },
          },
          series: [{
            name: '学习前',
            data: [49.9, 71.5, 60.4, 90.2]
          }, {
            name: '学习后',
            data: [56.9, 78.8, 68.5, 93.4]
          }]
        },
        styles3: {
        },
        options4:{
          chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
          },
          legend: {
            enabled: false
          },
          title: {
            text: '团队自我效能提升图'
          },
          subtitle: {
            text: '团队自我效能提升图'
          },
          xAxis: {
            gridLineWidth: 1,
            title: {
              text: '学习前的能力值'
            },
            labels: {
              format: '{value}'
            },
            plotLines: [{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 65,
              label: {
                rotation: 0,
                y: 15,
                style: {
                  fontStyle: 'italic'
                },
                text: '学习前的平均值：65'
              },
              zIndex: 3
            }]
          },
          yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
              text: '学习后的数据'
            },
            labels: {
              format: '{value}'
            },
            maxPadding: 0.2,
            plotLines: [{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 75,
              label: {
                align: 'right',
                style: {
                  fontStyle: 'italic'
                },
                text: '学习后的平均值：75',
                x: -10
              },
              zIndex: 3
            }]
          },
          tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
            '<tr><th>学习前:</th><td>{point.x}g</td></tr>' +
            '<tr><th>学习后:</th><td>{point.y}g</td></tr>' +
            '<tr><th>提升比:</th><td>{point.z}%</td></tr>',
            footerFormat: '</table>',
            followPointer: true
          },
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true,
                format: '{point.name}'
              }
            }
          },
          series: [{
            data: [
              { x: 95, y: 95, z: 13.8, name: '雷锋'},
              { x: 86.5, y: 98, z: 14.7, name: 'SUE'},
              { x: 80.8, y: 91.5, z: 15.8, name: '文卡'},
              { x: 80.4, y: 95, z: 12, name: '胡品'},
              { x: 80.3, y: 86.1, z: 11.8, name: 'vic'},
              { x: 78.4, y: 70.1, z: 16.6, name: '雷锋'},
              { x: 74.2, y: 68.5, z: 14.5, name: '于绍楠'},
              { x: 73.5, y: 83.1, z: 20.7, name: '赵坤'},
              { x: 71, y: 93.2, z: 24.7, name: '孟凡芳'},
              { x: 69.2, y: 57.6, z: 35.4, name: '张兵兵'},
              { x: 68.6, y: 20, z: 16, name: '李祥函'},
              { x: 65.5, y: 100, z: 35.3, name: '刘立强'},
              { x: 65.4, y: 50.8, z: 28.5, name: '黄训杰'},
              { x: 63.4, y: 51.8, z: 15.4, name: '张涛'},
              { x: 64, y: 82.9, z: 31.3, name: '杨同海'}
            ]
          }]
        },
        styles4: {
          height:600
        },
        options5:{
          chart: {
            type: 'column'
          },
          title: {
            text: '学员：雷锋学习时长与任务质量关系图'
          },
          xAxis: {
            categories: ['雷锋', ' 胡品', '文卡', 'SUE', '陈阳','王建宝','蒋双北','张业伟','丁仲鹏','于绍楠'],
            crosshair: true
          },
          yAxis: [
            { // Primary yAxis
              labels: {
                format: '{value} min',
                style: {
                  //                color: Highcharts.getOptions().colors[1]
                }
              },
              title: {
                text: '学习时间',
                style: {
                  //                color: Highcharts.getOptions().colors[1]
                }
              }
            }, { // Secondary yAxis
              title: {
                text: '完成质量',
                style: {
                  //                color: Highcharts.getOptions().colors[0]
                }
              },
              labels: {
                format: '{value} ',
                style: {
                  //                color: Highcharts.getOptions().colors[0]
                }
              },
              opposite: true
            }
          ],
          tooltip: {
            formatter: function () {
              let str = '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>'


              if(this.point.stackTotal!=null){
                str += '总量: ' + this.point.stackTotal;
              }
              return str;
            }
          },
          plotOptions: {
            column: {
              stacking: 'normal'
            }
          },
          series: [{
            name: '第一阶段',
            data: [3, 4, 4, 5, 5, 6, 6,5,5,4],
            yAxis: 1,
            stack: 'male' // stack 值相同的为同一组
          }, {
            name: '第二阶段',
            yAxis: 1,
            data: [4, 4,5, 5, 7, 8, 7,6,6,2],
            stack: 'male'
          }, {
            name: '第三阶段',
            yAxis: 1,
            data:[4, 7, 7, 8, 8, 10,9,6,5,4],
            stack: 'male'
          }, {
            name: '第四阶段',
            yAxis: 1,
            data: [3, 4, 4, 5, 5, 6, 6,5,5,4],
            stack: 'male'
          }          , {
            name: '学习时间',
            type: 'spline',
            data: [75.9, 85.5, 106.4, 129.2, 138.5,160.0,155.8,150.9,134.6,100.8],
            tooltip: {
              valueSuffix: ' min'
            }
          }]
        },
        styles5:{

        },
        options6:{
          chart: {
            type: 'waterfall'
          },
          title: {
            text: '学员：雷锋的各阶段学员数据汇总'
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            title: {
              text: '汇总值'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: '<b>{point.y}</b> '
          },
          series: [{
            upColor: Highcharts.getOptions().colors[2],
            color: Highcharts.getOptions().colors[3],
            data: [{
              name: '认知',
              y: -2
            }, {
              name: '激活',
              y: -3
            }, {
              name: '行动',
              y: 1
            }, {
              name: '应用',
              y: 6.5
            }, {
              name: '发展',
              y: 10
            }],
            dataLabels: {
              enabled: true,
              formatter: function () {
                return this.y;
              },
              style: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                textShadow: '0px 0px 3px black'
              }
            },
            pointPadding: 0
          }]
        },
        styles6:{

        },
        options7:{

        },
        styles7:{

        },
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },

    computed: {

    },
    components: {
      HchartCompontent,
      ChartShowCard
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
    top: 10px;
    left: 10px;
    z-index: 1000;
  }
  }
</style>

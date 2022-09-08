import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function Humidity1 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
  const datas = [
    [0, 0,],
    [5, 29],
    [10, 30,],
    [15, 40],
    [20, 30],
    [24, 60],
    [30, 50]]
  const initChart = () => {
    var myChart = echarts.init(charRef.current);
    myChart.setOption({
      title: {
        text: '湿度：%',
        textStyle: {
          fontSize: 14,
          color: '#76dee5',
        }
      },
      grid: {
        left: '6.5%',
      },
      xAxis: {
        type: 'value',
        splitNumber: 6,
        axisLabel: {
          show: true,
          color: '#76dee5',
          formatter: function (value, index) {
            return `${value}min`
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#33667f'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#33667f'
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        max: 100,
        axisLabel: {
          color: '#76dee5',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#33667f'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#33667f',
          }
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          // name: 'a',
          data: datas,
          type: 'line',
          symbolSize: 10,
          label: {
            show: true,
            position: 'top',
            fontSize: '12',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0) return '';
              return `${item.value[1]}%`;
            }
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#70eeee' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(112,238,238,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false 
            }
          },
          itemStyle: {
            color: '#a4fffe',
          },
          lineStyle: {
            color: '#6adce0',
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function WaterTemperature3 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
  const datas = [
    [0, 18,],
    [5, 40],
    [10, 50],
    [15, 40],
    [20, 60],
    [25, 80],
    [30, 70],
    [35, 62]]
  const initChart = () => {
    var myChart = echarts.init(charRef.current);
    myChart.setOption({
      title: {
        text: '水温:°C',
        textStyle: {
          fontSize: 14,
          color: '#aad8ff',
        }
      },
      grid: {
        left: '6.5%',
        show: true,
        borderColor: '#3b4c7c'
      },
      xAxis: {
        type: 'value',
        splitNumber: 6,
        axisLabel: {
          show: true,
          color: '#a4b4ed',
          formatter: function (value, index) {
            if (index == 0 || index == 7) return ''
            return `${value}min`
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#3b4c7c'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#a4b4ed', '#a4b4ed', '#a4b4ed', '#a4b4ed', '#a4b4ed', '#a4b4ed', '#a4b4ed', 'transparent']
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
          color: '#a4b4ed',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#3b4c7c'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3b4c7c',
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
          symbolSize: 12,
          label: {
            show: true,
            position: 'top',
            fontSize: '11',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0 || item.dataIndex == 7) return '';
              return `${item.value[1]}℃`;
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
                offset: 0, color: '#FF00FF' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(255,0,255,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false 
            }
          },
          itemStyle: {
            color: (params) => {
              // if(params.dataIndex == 0 ||params.dataIndex == 7) return 'transparent'
              return '#d5b5ff'
            },
            borderWidth: 4,
            borderColor: '#888eff',
          },
          lineStyle: {
            color: 'transparent',
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


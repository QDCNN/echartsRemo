import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function Demo01 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
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
      categoryAxis: {
        position: 'right',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          }
        }
      },
      grid: {
        left: '6.5%',
        show: true,
        borderColor: '#3b4c7c'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          color: '#a4b4ed',
        },
        data: ['', '5min', '10min', '15min', '20min', '25min', '30min', ''],
        axisLine: {
          show: true,
          lineStyle: {
            color: '#3b4c7c'
          },
        },
        splitLine: {
          show: true,
          interval: (index, value) => {
            if (index === 0 || index === 7) return false
            return true
          },
          lineStyle: {
            color: '#a4b4ed'
          }
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

      },
      series: [
        {
          // name: 'a',
          data: [18, 40, 50, 40, 60, 80, 70, 63],
          type: 'line',
          symbolSize: 12,
          label: {
            show: true,
            position: 'top',
            fontSize: '12',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0 || item.dataIndex == 7) return '';
              // console.log('item: ', item)
              return `${item.value}℃`;
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#FF00FF' },
                { offset: 0.5, color: 'rgba(255,0,255,0.4' },
                { offset: 1, color: 'rgba(255,0,255,0' }])
            }
          },
          itemStyle: {
            normal: {
              color: '#fff',
              lineStyle: {
                color: 'transparent',
              }
            }
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


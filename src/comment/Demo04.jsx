import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function Demo04 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
  const datas = [
    [0, 8,],
    [2, 15,],
    [5, 18],
    [10, 17],
    [15, 20],
    [20, 23],
    [25, 32],
    [30, 30]]
  const initChart = () => {
    var myChart = echarts.init(charRef.current);
    myChart.setOption({
      title: {
        text: '水温:°C',
        textStyle: {
          fontSize: 14,
          color: '#cfb1f1',
        }
      },
      grid: {
        left: '6.5%',
        show: true,
        borderColor: '#585a89'
      },
      xAxis: {
        type: 'value',
        splitNumber: 6,
        axisLabel: {
          show: true,
          color: '#ae8fce',
          formatter: function (value, index) {
            return value
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#7a569e'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#4a4d7b'
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
          color: '#b292d6',
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
            color: '#595c8a',
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
          symbolSize: 7,
          label: {
            show: true,
            position: 'top',
            fontSize: '12',
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
                offset: 0, color: '#f971fa' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(255,6,255,0.1)' // 100% 处的颜色
              }],
              global: false // 缺省为 false 
            }
          },
          itemStyle: {
            color: '#ffc2ff',
            borderWidth: 3,
            borderColor: '#fd8eff',
          },
          lineStyle: {
            color: '#f971fa',
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


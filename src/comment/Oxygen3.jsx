import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function Oxygen3 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
  const datas = [
    [0, 2,],
    [5, 8],
    [10, 12,],
    [15, 10],
    [20, 15],
    [25, 14],
    [30, 20]]
  const initChart = () => {
    var myChart = echarts.init(charRef.current);
    myChart.setOption({
      title: {
        text: '溶解氧：mg/L',
        textStyle: {
          fontSize: 14,
          color: '#70aef7',
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
          color: '#70aef7',
          formatter: function (value, index) {
            if (index == 0) return ''
            return `${value}min`
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#3e67a6'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3e67a6'
          },
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        max: 25,
        axisLabel: {
          color: '#70aef7',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#3e67a6'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#3e67a6',
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
          symbolSize: 13,
          label: {
            show: true,
            position: 'top',
            fontSize: '12',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0) return '';
              return `${item.value[1]}mg/L`;
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
                offset: 0, color: '#c590ff' // 0% 处的颜色
              }, {
                offset: 0.5, color: 'rgba(194,142,255,0.3)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(194,142,255,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false 
            }
          },
          itemStyle: {
            color: '#6ab3ff',
            borderWidth: 2,
            borderColor: '#fff',
          },
          lineStyle: {
            color: '#70aef7',
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


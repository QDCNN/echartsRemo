import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function EC3 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
  const datas = [
    [0, 19],
    [5, 40],
    [10, 50],
    [15, 50],
    [20, 70],
    [25, 80],
    [30, 70],
    [35, 61]]
  const initChart = () => {
    var myChart = echarts.init(charRef.current);
    myChart.setOption({
      title: {
        text: 'EC值：us/cm',
        textStyle: {
          fontSize: 14,
          color: '#76eaef',
        }
      },
      grid: {
        left: '6.5%',
      },
      xAxis: {
        type: 'value',
        name: '时间：min',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#76eaef',
          verticalAlign: 'top',
        },
        splitNumber: 6,
        axisLabel: {
          show: true,
          color: '#76eaef',
          formatter: function (value, index) {
            if (index == 0) return ''
            return value
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#455080'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#7685b9',
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
          color: '#76eaef',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#455080'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#455080',
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
          symbolSize: 11,
          label: {
            show: true,
            position: 'top',
            fontSize: '12',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0 || item.dataIndex == 7) return '';
              return `${item.value[1]}`;
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
                offset: 0, color: '#6848da' // 0% 处的颜色
              }, {
                offset: 0.5, color: 'rgba(35, 59, 145,0.7)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(31, 54, 135,0.3)' // 100% 处的颜色
              }],
              global: false // 缺省为 false 
            }
          },
          itemStyle: {
            color: '#a9bdff',
            borderWidth: 4,
            borderColor: '#4575ff',
          },
          lineStyle: {
            color: '#4a73ff',
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


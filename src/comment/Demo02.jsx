import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function Demo02 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
  const datas = [
    [0, 30,],
    [4, 40],
    [7.5, 60],
    [10, 55],
    [12.5, 80],
    [15, 70],
    [17.5, 45],
    [20, 50],
    [22.5, 80],
    [25, 60],
    [30, 80]]
  const initChart = () => {
    var myChart = echarts.init(charRef.current);
    myChart.setOption({
      title: {
        text: '水温:°C',
        textStyle: {
          fontSize: 14,
          color: '#6bced6',
        }
      },
      grid: {
        left: '6.5%',
        show: true,
        borderColor: '#2e576a',
      },
      xAxis: {
        type: 'value',
        splitNumber: 5,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#2e576a'
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          color: '#6bced6',
          formatter: function (value, index) {
            if (index == 0) return ''
            console.log(value)
            return `${value}min`
          }
        },
        splitLine: {
          show: false,
        }
      },
      yAxis: {
        type: 'value',
        max: 100,
        axisLabel: {
          color: '#6bced6',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#2e576a'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#2e576a',
          }
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: 'a',
          data: datas,
          type: 'line',
          symbolSize: 12,
          label: {
            show: true,
            position: 'top',
            fontSize: '12',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0) return '';
              return `${item.value[1]}℃`;
            }
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#67faf7' },
              { offset: 0.5, color: 'rgba(71, 153, 167,0.9)' },
              { offset: 1, color: 'rgba(71, 153, 167,0)' }])
          },
          itemStyle: {
            color: '#6bced6',
            borderWidth: 2,
            borderColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#fcd95a' // 0% 处的颜色
              }, {
                offset: 1, color: '#fff' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
          },
          lineStyle: {
            color: '#fcd95a',
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function Humidity2 () {
  const charRef = useRef()
  useEffect(() => {
    initChart()
  }, [])
  const datas = [
    [0, 30,],
    [2, 40],
    [7, 60,],
    [9, 80],
    [13, 70],
    [17, 90],
    [20, 80],
    [25, 70],
    [30, 80]]
  const initChart = () => {
    var myChart = echarts.init(charRef.current);
    myChart.setOption({
      title: {
        text: '湿度：%',
        textStyle: {
          fontSize: 14,
          color: '#b0aee8',
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
          color: '#b0aee8',
          formatter: function (value, index) {
            return value
          }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#616195'
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#656095'
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
          color: '#b0aee8',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#616195'
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#616195',
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
            fontSize: '11',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0 || item.dataIndex == 7 || item.dataIndex == 8) return '';
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
                offset: 0, color: '#9482fe' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(148,130,254,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false 
            }
          },
          itemStyle: {
            color: '#c5ffc1',
            borderWidth: 3,
            borderColor: '#cfc5ff',
          },
          lineStyle: {
            color: '#9482fe',
          }
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


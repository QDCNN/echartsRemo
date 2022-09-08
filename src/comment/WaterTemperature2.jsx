import * as echarts from "echarts";
import { useEffect, useRef } from 'react';
export default function WaterTemperature2 () {
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
      grid: {
        left: '6.5%',
        show: true,
        borderColor: '#3b4c7c'
      },
      xAxis: {
        type: 'category',
        data: ['', '5min', '10min', '15min', '20min', '25min', '30min', ''],
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        max: 100,
      },
      series: [
        {
          data: [0, 50, 58, 60, 58, 68, 58],
          type: 'bar',
          label: {
            show: true,
            position: 'top',
            fontSize: '11',
            color: '#fff',
            formatter: (item) => {
              if (item.dataIndex == 0) return '';
              return `${item.value}℃`;
            }
          },
        }
      ]
    });
  }
  return (
    <div ref={charRef} style={{ width: '600px', height: '300px', backgroundColor: '#040f32' }}></div>
  )
}


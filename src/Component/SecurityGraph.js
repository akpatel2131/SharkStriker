import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './SecurityGraph.css';

const SecurityEventsOverTime = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      title: {
        text: 'Security Events Over Time',
        left: 'center',
        textStyle: {
          color: '#ffffff',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '08:20', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', 
          '11:30', '12:00', '12:30', '01:00', '01:20'
        ],
        axisLabel: {
          color: '#ffffff',
        },
        axisLine: {
          lineStyle: {
            color: '#ffffff',
          },
        },
        splitLine: {
            show: false,
          },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#ffffff',
        },
        axisLine: {
          lineStyle: {
            color: '#ffffff',
          },
        },
        splitLine: {
            show: false,
          },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: true,
        borderColor: '#ffffff',
        borderWidth: 1,
      },
      series: [
        {
          name: 'Count',
          type: 'line',
          stack: 'Total',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: '#ff6600' },   // Start color
                { offset: 1, color: 'transparent' } // End color
              ],
            },
          },
          data: [150, 80, 30, 20, 15, 10, 8, 10, 12, 8, 5, 3],
          lineStyle: {
            color: '#ff6600',
          },
          itemStyle: {
            color: '#ff6600',
          },
        },
        {
            name: 'Count',
            type: 'line',
            stack: 'Total',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#ff6600' },   // Start color
                  { offset: 1, color: 'transparent' } // End color
                ],
              },
            },
            data: [100, 80, 50, 40, 15, 10, 8, 10, 12, 8, 5, 3],
            lineStyle: {
              color: '#5266eb',
            },
            itemStyle: {
              color: '#5266eb',
            },
          },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <div className="security-events-chart-container">
      <div className="chart-container" ref={chartRef} />
    </div>
  );
};

export default SecurityEventsOverTime;

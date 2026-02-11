'use client';
import { Chart } from 'primereact/chart';
import { useState, useEffect } from 'react';

export default function ChartDashboard() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Sales',
          data: [120, 150, 180, 90, 200, 170, 220],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
        {
          label: 'Revenue',
          data: [100, 140, 160, 80, 180, 150, 210],
          fill: false,
          borderColor: '#FFA726',
          tension: 0.4,
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card w-4xl h-2.5">
      <h2 className="text-xl font-semibold mb-4">Sales & Revenue Overview</h2>
      <Chart type="line" data={chartData} options={chartOptions} className="h-[400px]" />
    </div>
  );
}

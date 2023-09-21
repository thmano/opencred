import { faker } from '@faker-js/faker';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { useRef } from 'react';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
);

export const options = {
  elements: {
    line: {
      tension: 0.3,
    },
  },
  pointStyle: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = [
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
  '19/12',
];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      borderColor: '#000',
      backgroundColor: '#000',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
    },
  ],
};

export function ChartLine() {
  const chartRef = useRef<ChartJS>(null);

  const ChartStyle = {
    position: 'relative',
    maxHeight: '300px',
    width: '100%',
  } as React.CSSProperties;

  return <Chart style={ChartStyle} ref={chartRef} type="line" options={options} data={data} />;
}

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

const options = {
  elements: {
    line: {
      tension: 0.3,
    },
    pointStyle: false,
  },
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
      borderColor: '#4FD1C5',
      borderWidth: 1,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'black',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      borderColor: 'white',
      borderWidth: 1,
    },
  ],
};

export function ChartBar() {
  const chartRef = useRef<ChartJS>(null);
  const ChartStyle = {
    position: 'relative',
    maxHeight: '300px',
    width: '100%',
  } as React.CSSProperties;

  return <Chart style={ChartStyle} ref={chartRef} type="bar" options={options} data={data} />;
}

import { Card, Text } from '@chakra-ui/react';
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
  },
  pointStyle: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Ouc', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      borderColor: '#1A8C6F',
      borderWidth: 1,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'black',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
      borderWidth: 1,
    },
  ],
};

export function ChartFinancial() {
  const chartRef = useRef<ChartJS>(null);
  const ChartStyle = {
    position: 'relative',
    maxHeight: '300px',
    width: '100%',
  } as React.CSSProperties;

  return (
    <Card w="50%" p="16px">
      <Text mb="16px" fontSize="12px" fontWeight="700" color="gray.900">
        Historico de performance
      </Text>
      <Chart style={ChartStyle} ref={chartRef} type="bar" options={options} data={data} />
    </Card>
  );
}

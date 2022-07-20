import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Daily Learning Activity',
    },
  },
};

const labels = ['1 Jan', '2 Jan', '3 Jan','4 Jan', '5 Jan', '6 Jan','7 Jan', '8 Jan', '9 Jan','10 Jan', '11 Jan', '12 Jan',];

export const data = {
  labels,
  datasets: [
    {
      data: ["6","5","4","5","3","4","6","5","6","3","5","6"],
      borderColor: 'rgba(0,228,255,255)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      data: ["5","4","5","6","5","6","5","4","5","4","6","6"],
      borderColor: 'rgba(170,42,255,1)',
      backgroundColor: 'rgba(170, 42, 255, 0.5)',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
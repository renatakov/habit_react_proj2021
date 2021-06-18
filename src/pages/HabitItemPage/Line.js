import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['19.06', '20.06', '22.06', '23.06', '25.06', '26.06'],
  datasets: [
    {

      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(173, 129, 209)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Диаграмма привычки</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
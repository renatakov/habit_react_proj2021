import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: "График",
      data: [6, 10, 5, 3, 9, 10],
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
          beginAtZero: true,
        },
      },
    ],
  },
};

class LineChart extends Component {
  // const labels = useState(this.state.createdAt)
  render() {
    let labels = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(this.props.createdAt).getDate() + i;
      const formatNewDate = new Date(this.props.createdAt);
      formatNewDate.setDate(date);
      labels.push(formatNewDate.getDate());
    }
    return (
      <>
        <div className="header">
          <h1 className="title">Диаграмма привычки</h1>
        </div>
        <Line data={{ ...data, labels }} options={options} />
      </>
    );
  }
}

export default LineChart;

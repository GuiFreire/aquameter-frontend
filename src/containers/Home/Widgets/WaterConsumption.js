import React, {  } from "react";
import ChartIcon from "../../../assets/showChart.png";
import LineChart from "../../../components/lineChart";
import { months } from "../../../utils/months";

const WaterConsumption = ({ monthVolumeBySensor }) => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Consumo de Água (em litros)",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card" id="lineChart">
      <div className="contentCard">
        <div className="titleCard">
          <img className="iconCard" src={ChartIcon} alt="Icone gráfico" />
          <p className="titleChart">CONSUMO DE ÁGUA MENSAL</p>
        </div>
        <LineChart
          options={chartOptions}
          chartData={{
            labels: months,
            datasets: monthVolumeBySensor.map((item) => ({
              label: item.sensor_name,
              data: item.volume.map((v) => ({
                x: v.month,
                y: v.userConsumption,
              })),
              fill: false,
              tension: 0.1,
            })),
          }}
        />
      </div>
    </div>
  );
};

export default WaterConsumption;
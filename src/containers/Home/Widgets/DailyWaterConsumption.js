import React from "react";
import ChartIcon from "../../../assets/showChart.png";
import LineChart from "../../../components/lineChart";

const DailyWaterConsumption = ({ dailyVolumeBySensor }) => {
  function _numDias() {
    const objData = new Date(),
      numAno = objData.getFullYear(),
      numMes = objData.getMonth() + 1,
      numDias = new Date(numAno, numMes, 0).getDate();

    return numDias;
  }

  const totalDays = _numDias();
  const days = [];

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

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
          <p className="titleChart">CONSUMO DE ÁGUA DIÁRIO</p>
        </div>
        <LineChart
          options={chartOptions}
          chartData={{
            labels: days,
            datasets: dailyVolumeBySensor.map((item) => ({
              label: item.sensor_name,
              data: item.volume.map((v) => ({
                x: v.day,
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

export default DailyWaterConsumption;

import React, {  } from "react";
import ChartIcon from "../../../assets/showChart.png";
import LinearProgressWithLabel from "../../../components/LinearProgress";
import { months } from "../../../utils/months";

const UsageGoal = ({ monthVolumeBySensor }) => {
  return (
    <div className="card" id="consumeTable">
      <div className="contentCard">
        <div className="titleCard">
          <img className="iconCard" src={ChartIcon} alt="Icone gráfico" />
          <p className="titleChart">META DE USO</p>
        </div>
        {monthVolumeBySensor.map((item) => (
          <LinearProgressWithLabel
            key={item.sensor_code}
            value={
              item.volume.find((i) => i.month === months[new Date().getMonth()])
                .userConsumption
            }
            sensorName={item.volume[0].name}
          />
        ))}
      </div>
    </div>
  );
};

export default UsageGoal;

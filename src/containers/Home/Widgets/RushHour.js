import React from "react";
import TimeIcon from "../../../assets/timeIcon.png";

const RushHour = ({ rushHourBySensor }) => {
  return (
    <div className="card" id="usingProgress">
      <div className="contentCard">
        <div className="titleCard">
          <img className="iconCard" src={TimeIcon} alt="Icone relógio" />
          <p className="titleChart">HORÁRIOS DE PICO</p>
        </div>
        <div className="tableCard">
          {rushHourBySensor.map((item) =>
            item.volume.length > 0 ? (
              <table key={item.sensor_Code} className="sensorTable">
                <caption className="titleTable">{item.sensor_name}</caption>
                <thead>
                  <tr>
                    <th className="firstColumn">HORÁRIO</th>
                    <th className="secondColumn">CONSUMO</th>
                  </tr>
                </thead>
                <tbody>
                  {item.volume.map((v) => (
                    <tr key={v.hour}>
                      <td className="firstColumn">{v.hour}H</td>
                      <td className="secondColumn">
                        {v.userConsumption.toFixed(2)}L/h
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default RushHour;

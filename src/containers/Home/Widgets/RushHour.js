import React, {  } from "react";
import TimeIcon from "../../../assets/timeIcon.png";

const RushHour = () => {
  return (
    <div className="card" id="usingProgress">
      <div className="contentCard">
        <div className="titleCard">
          <img className="iconCard" src={TimeIcon} alt="Icone relógio" />
          <p className="titleChart">HORÁRIOS DE PICO</p>
        </div>
        <div className="tableCard">
          <table>
            <thead>
              <tr>
                <th className="firstColumn">HORÁRIO</th>
                <th className="secondColumn">CONSUMO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="firstColumn">20H</td>
                <td className="secondColumn">12L/h</td>
              </tr>
              <tr>
                <td className="firstColumn">12H</td>
                <td className="secondColumn">10L/h</td>
              </tr>
              <tr>
                <td className="firstColumn">17H</td>
                <td className="secondColumn">9L/h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RushHour;
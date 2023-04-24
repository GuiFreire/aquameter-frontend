import React, { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import ChartIcon from "../../assets/showChart.png";
import TimeIcon from "../../assets/timeIcon.png";
import "./home.css";
import LineChart from "../../components/lineChart";
import {UserData} from '../../api/Data'

const Home = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data => data.month)),
        datasets: [
            {
                label: 'Consumo de Água (em litros)',
                data: UserData.map((data) => data.userConsumption),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    });
    const navigate = useNavigate();
    const { user, signOut } = useAuth();
    const handleSignOut = async () => {
        await signOut();
        navigate("/");
};

  return (
    <div className="content">
      <div className="homeHeader">
        <div className="iconHome">
            <img className="home-logo" src={Logo} alt="Aqua Meter Logo" />
        </div>
        <div className="infoHeader">
            <div className="textHeader">
                <p className="simpleText">Olá, <b className="boldBlueText">{user.name}</b></p>
            </div>
            <button onClick={handleSignOut}>sair!</button>
        </div>
      </div>
      <div className="homeBody">
        <div className="gridHome">
            <div className="card" id="lineChart">
                <div className="contentCard">
                    <div className="titleCard">
                        <img className="iconCard" src={ChartIcon} alt="Icone gráfico" />
                        <p className="titleChart">CONSUMO DE ÁGUA</p>
                    </div>
                    <LineChart chartData={userData}/>
                </div>
            </div>
            <div className="card" id="consumeTable">
                <div className="contentCard">
                    <div className="titleCard">
                        <img className="iconCard" src={ChartIcon} alt="Icone gráfico" />
                        <p className="titleChart">META DE USO</p>
                    </div>
                </div>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Home;

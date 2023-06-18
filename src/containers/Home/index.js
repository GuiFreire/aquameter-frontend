import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { getSensorData, getSensorVolumeByMonth, getSensorVolumeByDay} from "../../api/sensor";
import { months } from "../../utils/months";
import WaterConsumption from "./Widgets/WaterConsumption";
import UsageGoal from "./Widgets/UsageGoal";
import RushHour from "./Widgets/RushHour";
import DailyWaterConsumption from "./Widgets/DailyWaterConsumption";

const Home = () => {
  const { user } = useAuth();
  const [sensors, setSensors] = useState([]);
  const [monthVolumeBySensor, setMonthVolumeBySensor] = useState([]);
  const [dailyVolumeBySensor, setDailyVolumeBySensor] = useState([]);

  const loadSensor = async () => {
    const response = await getSensorData(user.id);

    if (response.length > 0) {
      setSensors(response);
      loadVolumeByMonth(response);
      loadVolumeByDay(response);
    }
  };

  const loadVolumeByMonth = async (sensors) => {
    const volumeByMonth = await Promise.all(
      sensors.map(async (item) => {
        const response = await getSensorVolumeByMonth(item.sensor_code);

        const formattedVolume = response.map((v) => ({
          id: item.sensor_code,
          month: months[v.month - 1],
          userConsumption: v.volume,
          name: item.name,
        }));

        return { sensor_code: item.sensor_code, volume: formattedVolume };
      })
    );

    setMonthVolumeBySensor(volumeByMonth);
  };

  const loadVolumeByDay = async (sensors) => {
    const volumeByDay = await Promise.all(
      sensors.map(async (item) => {
        const response = await getSensorVolumeByDay(item.sensor_code);

        const formattedVolume = response.map((v) => ({
          id: item.sensor_code,
          day: v.day,
          userConsumption: v.volume,
          name: item.name,
        }));

        return { sensor_code: item.sensor_code, volume: formattedVolume };
      })
    );

    setDailyVolumeBySensor(volumeByDay);
  };

  useEffect(() => {
    loadSensor();
  }, []);

  return (
    <div className="homeBody">
      <div className="gridHome">
        <div className="contentChart">
          <DailyWaterConsumption dailyVolumeBySensor={dailyVolumeBySensor} />
          <UsageGoal monthVolumeBySensor={monthVolumeBySensor} />
        </div>
        <div className="contentChart">
          <WaterConsumption monthVolumeBySensor={monthVolumeBySensor} />
          <RushHour />
        </div>
      </div>
    </div>
  );
};

export default Home;

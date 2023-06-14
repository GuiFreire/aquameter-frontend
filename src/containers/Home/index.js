import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { getSensorData, getSensorVolumeByMonth } from "../../api/sensor";
import { months } from "../../utils/months";
import WaterConsumption from "./Widgets/WaterConsumption";
import UsageGoal from "./Widgets/UsageGoal";
import RushHour from "./Widgets/RushHour";

const Home = () => {
  const { user } = useAuth();
  const [sensors, setSensors] = useState([]);
  const [monthVolumeBySensor, setMonthVolumeBySensor] = useState([]);

  const loadSensor = async () => {
    const response = await getSensorData(user.id);

    if (response.length > 0) {
      setSensors(response);
      loadVolumeByMonth(response);
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

  useEffect(() => {
    loadSensor();
  }, []);

  return (
    <div className="homeBody">
      <div className="gridHome">
        <WaterConsumption monthVolumeBySensor={monthVolumeBySensor} />
        <UsageGoal monthVolumeBySensor={monthVolumeBySensor} />
        <RushHour />
      </div>
    </div>
  );
};

export default Home;

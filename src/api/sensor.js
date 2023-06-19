import api from "./api";

export const getSensorData = async (user_id) => {
  const response = await api
    .get("/sensor", {
      params: {
        user_id: user_id,
      },
    })
    .then((response) => {
      if (response.data !== "Nenhum sensor encontrado") {
        return response.data;
      } else {
        return [];
      }
    })
    .catch((error) => {
      return [];
    });
  return response;
};

export const getSensorVolumeByMonth = async (sensorCode) => {
    const response = await api
      .get(`/volume/month/${sensorCode}`)
      .then((response) => {
        if (response.data !== "Nenhum registro encontrado") {
          return response.data;
        } else {
          return [];
        }
      })
      .catch((error) => {
        return [];
      });
    return response;
  };

  export const getSensorVolumeByDay = async (sensorCode) => {
    const response = await api
      .get(`/volume/day/${sensorCode}`)
      .then((response) => {
        if (response.data !== "Nenhum registro encontrado") {
          return response.data;
        } else {
          return [];
        };
      })
      .catch((error) => {
        return [];
      });
      return response;
  };

  export const getSensorVolumeByRushHour = async (sensorCode) => {
    const response = await api
      .get(`/volume/hour/${sensorCode}`)
      .then((response) => {
        if (response.data !== "Nenhum registro encontrado") {
          return response.data;
        } else {
          return [];
        };
      })
      .catch((error) => {
        return [];
      });
      return response;
  };
  
  export const createSensor = async (name, sensorCode, userId) => {
    const response = api
    .post(
      "/sensor",
      { name, sensorCode, userId },
      { "Access-Control-Allow-Origin": "*" }
    )
    .then((response) => response)
    .catch((error) => {
      console.log("error", error);
    });

  return response;
  }

import api from "./api";

export const UserData = [
  {
    id: 1,
    month: "Janeiro",
    userConsumption: 30,
  },
  {
    id: 1,
    month: "Fevereiro",
    userConsumption: 70,
  },
  {
    id: 1,
    month: "Março",
    userConsumption: 45,
  },
  {
    id: 1,
    month: "Abril",
    userConsumption: 12,
  },
  {
    id: 1,
    month: "Maio",
    userConsumption: 100,
  },
  {
    id: 1,
    month: "Junho",
    userConsumption: 20,
  },
  {
    id: 1,
    month: "Julho",
    userConsumption: 65,
  },
  {
    id: 1,
    month: "Agosto",
    userConsumption: 55,
  },
  {
    id: 1,
    month: "Setembro",
    userConsumption: 70,
  },
  {
    id: 1,
    month: "Outubro",
    userConsumption: 95,
  },
  {
    id: 1,
    month: "Novembro",
    userConsumption: 80,
  },
  {
    id: 1,
    month: "Dezembro",
    userConsumption: 55,
  },
];

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

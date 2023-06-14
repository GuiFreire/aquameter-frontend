import api from "./api";

const logins = [
  {
    email: "nathalia@gmail.com",
    name: "Nathália",
    code: 123,
    password: "1234",
  },
  {
    email: "guilherme@gmail.com",
    name: "Guilherme",
    code: 12345,
    password: "1234",
  },
];

export const validateLogin = async ({ document, password }) => {
  const response = await api
    .get("/user", {
      params: {
        document: document,
        password: password,
      },
    })
    .then((response) => {
      if (response.data !== "Nenhum usuário encontrado") {
        return {
          isValid: true,
          document: response.data.document,
          name: response.data.name,
          id: response.data.id,
        };
      } else {
        return { isValid: false };
      }
    })
    .catch((error) => {
      console.log("error: ", error);
    });
  return response;
};

export const createLogin = async ({ name, document, password }) => {
  const response = api
    .post(
      "/user",
      { name, document, password },
      { "Access-Control-Allow-Origin": "*" }
    )
    .then((response) => response)
    .catch((error) => {
      console.log("error", error);
    });

  return response;
};

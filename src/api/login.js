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

const validateLogin = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    const foundLogin = logins.find(
      (item) => item.email === email && item.password === password
    );

    if (foundLogin) {
      resolve({
        isValid: true,
        email: foundLogin.email,
        name: foundLogin.name,
        code: foundLogin.code,
    });
    } else {
      reject({ isValid: false });
    }
  });
};

module.exports = {
  validateLogin,
};

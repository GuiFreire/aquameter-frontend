import axios from "axios";

const api = axios.create({
    baseURL: "https://aquameter-backend.azurewebsites.net"
});

export default api;
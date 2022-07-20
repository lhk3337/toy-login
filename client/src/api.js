import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3002",
});

export const userApi = {
  users: () => api.get("/users"),
};

export default api;

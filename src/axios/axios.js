import axios from "axios";

console.log(import.meta.env.VITE_BE_BASE_URL);

axios.defaults.baseURL = import.meta.env.VITE_BE_BASE_URL;

export const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axios;

import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "http://localhost:5000/api/v1/tickitz/",
});

export default axiosApiIntances;

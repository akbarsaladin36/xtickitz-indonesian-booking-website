import axios from "axios";
require("dotenv").config();

const axiosApiIntances = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_BASEURL}`,
});

export default axiosApiIntances;
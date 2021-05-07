import axiosApiIntances from "../../utils/axios";

export const getAllMovie = () => {
  return {
    type: "GET_ALL_MOVIE",
    payload: axiosApiIntances.get("tickitz/home"),
  };
};

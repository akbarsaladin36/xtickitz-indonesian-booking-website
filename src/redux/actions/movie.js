import axiosApiIntances from "../../utils/axios";

export const getAllMovie = () => {
  return {
    type: "GET_ALL_MOVIE",
    payload: axiosApiIntances.get("tickitz/home"),
  };
};

export const getOneMovie = (id) => {
  return {
    type: "GET_ONE_MOVIE",
    payload: axiosApiIntances.get(`tickitz/movie-detail/${id}`),
  };
};

export const createMovie = (data) => {
  return {
    type: "CREATE_MOVIE",
    payload: axiosApiIntances.post("tickitz/home", data),
  };
};

export const updateMovie = (id, data) => {
  return {
    type: "UPDATE_MOVIE",
    payload: axiosApiIntances.patch(`tickitz/movie-detail/${id}`, data),
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: axiosApiIntances.delete(`tickitz/movie-detail/${id}`),
  };
};

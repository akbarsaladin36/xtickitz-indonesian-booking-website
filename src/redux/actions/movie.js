import axiosApiIntances from "../../utils/axios";

export const getAllMovie = () => {
  return {
    type: "GET_ALL_MOVIE",
    payload: axiosApiIntances.get("movie"),
  };
};

export const getOneMovie = (id) => {
  return {
    type: "GET_ONE_MOVIE",
    payload: axiosApiIntances.get(`movie/${id}`),
  };
};

export const createMovie = (formData) => {
  return {
    type: "CREATE_MOVIE",
    payload: axiosApiIntances.post("movie/admin", formData),
  };
};

export const updateMovie = (id, formData) => {
  return {
    type: "UPDATE_MOVIE",
    payload: axiosApiIntances.patch(`movie/admin/${id}`, formData),
  };
};

export const updateImageMovie = (id, formData) => {
  return {
    type: "UPDATE_IMAGE_MOVIE",
    payload: axiosApiIntances.patch(`movie/admin/img/${id}`, formData),
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: axiosApiIntances.delete(`movie/admin/${id}`),
  };
};

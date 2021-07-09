import axiosApiIntances from "../../utils/axios";

export const getProfile = (id) => {
  return {
    type: "GET_PROFILE",
    payload: axiosApiIntances.get(`users/${id}`),
  };
};

export const updateProfile = (id, data) => {
  return {
    type: "UPDATE_PROFILE",
    payload: axiosApiIntances.patch(`users/${id}`, data),
  };
};

export const updateImageProfile = (id, formData) => {
  return {
    type: "UPDATE_PROFILE_IMAGE",
    payload: axiosApiIntances.patch(`users/img/${id}`, formData),
  };
};

export const deleteImageProfile = (id, formData) => {
  return {
    type: "DELETE_PROFILE_IMAGE",
    payload: axiosApiIntances.patch(`users/img-delete/${id}`, formData),
  };
};

export const updateProfilePassword = (id, data) => {
  return {
    type: "UPDATE_PROFILE_PASSWORD",
    payload: axiosApiIntances.patch(`users/change-password/${id}`, data),
  };
};

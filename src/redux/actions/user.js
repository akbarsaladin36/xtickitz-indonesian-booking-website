import axiosApiIntances from "../../utils/axios";

export const getProfile = (id) => {
  return {
    type: "GET_PROFILE",
    payload: axiosApiIntances.get(`tickitz/profile/${id}`),
  };
};

export const updateProfile = (id) => {
  return {
    type: "UPDATE_PROFILE",
    payload: axiosApiIntances.patch(`tickitz/profile/${id}`),
  };
};

export const updateProfilePassword = (id) => {
  return {
    type: "UPDATE_PROFILE_PASSWORD",
    payload: axiosApiIntances.patch(`tickitz/change-password/${id}`),
  };
};

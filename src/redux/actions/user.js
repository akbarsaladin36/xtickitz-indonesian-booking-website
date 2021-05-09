import axiosApiIntances from "../../utils/axios";

export const getProfile = (id) => {
  return {
    type: "GET_PROFILE",
    payload: axiosApiIntances.get(`tickitz/profile/${id}`),
  };
};

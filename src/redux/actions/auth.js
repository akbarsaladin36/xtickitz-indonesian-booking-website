import axiosApiIntances from "../../utils/axios";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axiosApiIntances.post("auth/login", data),
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

const initialState = {
  data: {},
  isLogin: false,
  userStatus: "user",
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isLogin: false,
        userStatus: "user",
        isLoading: true,
        isError: false,
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isLogin: true,
        userStatus: "user",
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isLogin: false,
        userStatus: "user",
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    case "REGISTER_PENDING":
      return {
        ...state,
        userStatus: "user",
        isLoading: true,
        isError: false,
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        userStatus: "user",
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        userStatus: "user",
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {},
        msg: "Success Logout!",
      };
    default:
      return state;
  }
};

export default auth;

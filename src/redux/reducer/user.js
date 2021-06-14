const initialState = {
  dataUser: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "GET_PROFILE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataUser: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    }

    case "GET_PROFILE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        dataUser: [],
        msg: action.payload.response.data.msg,
      };
    }

    case "UPDATE_PROFILE_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "UPDATE_PROFILE_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }

    case "UPDATE_PROFILE_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }

    case "UPDATE_PROFILE_PASSWORD_PENDING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case "UPDATE_PROFILE_PASSWORD_FULFILLED": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }

    case "UPDATE_PROFILE_PASSWORD_REJECTED": {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }

    default:
      return state;
  }
};

export default user;

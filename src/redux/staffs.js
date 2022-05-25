import * as ActionTypes from "./ActionTypes";

export const Staffs = (
  state = {
    isLoading: false,
    errmess: null,
    staffs: [],
  },
  action
) => {
  switch (action.type) {
    //staff success
    case ActionTypes.STAFFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errmess: null,
        staffs: action.payload,
      };

    //staff loading
    case ActionTypes.STAFFS_LOADING:
      return {
        ...state,
        isLoading: true,
        errmess: null,
      };

    //staff failed
    case ActionTypes.STAFFS_FAILED:
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
      };

    default:
      return state;
  }
};

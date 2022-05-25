import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//staff
export const fetchStaffs = () => (dispatch) => {
  dispatch(staffsLoading(true));

  return fetch(baseUrl + "/staffs", { "Access-Control-Allow-Origin": "*" }) //call API
    .then((response) => response.json())
    .then((staffs) => dispatch(staffsSuccess(staffs)));
};

export const staffsLoading = () => ({
  type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
});

export const staffsSuccess = (staffs) => ({
  type: ActionTypes.STAFFS_SUCCESS,
  payload: staffs,
});

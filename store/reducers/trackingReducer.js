import {
  ADDTRACKING,
  SETTRACKING,
  DELETETRACKING,
  SETUSERNAME,
} from "../actions/index";

const initialState = {
  tracking: [],
  userName: "",
};

export default function trackingReducer(state = initialState, action) {
  switch (action.type) {
    case SETUSERNAME:
      return {
        ...state,
        userName: action.payload,
      };
    case SETTRACKING:
      return {
        ...state,
        tracking: action.payload,
      };
    case ADDTRACKING:
      return {
        ...state,
        tracking: state.tracking.concat(action.payload),
      };
    case DELETETRACKING:
      return {
        ...state,
        tracking: state.tracking.filter(
          (item) => item.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
}

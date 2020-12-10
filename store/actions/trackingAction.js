import { ADDTRACKING, SETTRACKING, DELETETRACKING, SETUSERNAME } from "./index";

export const addTracking = (value) => {
  return {
    type: ADDTRACKING,
    payload: value,
  };
};

export const setTracking = (value) => {
  return {
    type: SETTRACKING,
    payload: value,
  };
};

export const deleteTracking = (value) => {
  return {
    type: DELETETRACKING,
    payload: value,
  };
};

export const setUserName = (value) => {
  return {
    type: SETUSERNAME,
    payload: value,
  };
};

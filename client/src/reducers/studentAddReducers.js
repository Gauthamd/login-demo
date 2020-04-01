import {
    STUDENT_ADD_STATUS
  } from "../actions/types";
  const isEmpty = require("is-empty");
  const initialState = {
    isAdded: false,
  };
  export default function(state = initialState, action) {
    switch (action.type) {
      case STUDENT_ADD_STATUS:
        return {
          ...state,
          isAdded: action.payload,
        };
      default:
        return state;
    }
  }
  
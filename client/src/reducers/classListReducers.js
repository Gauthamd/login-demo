import {
    CLASS_LIST
  } from "../actions/types";
  const isEmpty = require("is-empty");
  const initialState = {
    classList: []
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case CLASS_LIST:
        return {
          ...state,
          classList: action.payload,
        };
      default:
        return state;
    }
  }
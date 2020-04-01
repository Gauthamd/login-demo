import {
    COUNTRY_LIST
  } from "../actions/types";
  const isEmpty = require("is-empty");
  const initialState = {
    countryList: []
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case COUNTRY_LIST:
        return {
          ...state,
          countryList: action.payload,
        };
      default:
        return state;
    }
  }
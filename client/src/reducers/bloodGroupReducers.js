import {
    BLOOD_GROUP_LIST
  } from "../actions/types";
  const isEmpty = require("is-empty");
  const initialState = {
    bloodGroupList: []
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case BLOOD_GROUP_LIST:
        return {
          ...state,
          bloodGroupList: action.payload,
        };
      default:
        return state;
    }
  }
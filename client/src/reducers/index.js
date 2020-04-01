import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import countryListReducer from "./countryListReducers";
import classListReducer from "./classListReducers";
import bloodGroupReducer from "./bloodGroupReducers";
import studentAddReducer from "./studentAddReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  countryList: countryListReducer,
  classList: classListReducer,
  bloodGroupList: bloodGroupReducer,
  studentAddStatus: studentAddReducer,
});
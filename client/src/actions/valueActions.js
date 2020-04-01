import axios from "axios";
import { COUNTRY_LIST, CLASS_LIST, BLOOD_GROUP_LIST, STUDENT_ADD_STATUS, GET_ERRORS } from "./types";


export const CountryList = () => dispatch => {
    axios.get("api/users/country", {}).then(res => {
        const { value } = res.data;

        //const decoded = jwt_decode(token);

        //console.log(decoded);
        // Set current user
        dispatch(setCountryList(value));
    });

};

export const addNewStudent = newStudent => dispatch => {
    console.log(newStudent);
    axios.post("api/users/newadmission", newStudent)
         .then(res => {
             dispatch(setStudentAddStatus(res.data.success));
         });

};

export const ClassesList = () => dispatch => {
    axios.get("api/users/class", {}).then(res => {
        const { value } = res.data;

        //const decoded = jwt_decode(token);

        //console.log(decoded);
        // Set current user
        dispatch(setClass(value));
    }).catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );

};

export const BloodGroupList = () => dispatch => {
    axios.get("api/users/bloodgroup", {}).then(res => {
        const { value } = res.data;

        //const decoded = jwt_decode(token);

        //console.log(res.data.success);
        // Set current user
        dispatch(setBloodGorup(value));
    });

};

// Set logged in user
export const setCountryList = value => {
    return {
        type: COUNTRY_LIST,
        payload: value
    };
};

export const setStudentAddStatus = value => {
    return {
        type: STUDENT_ADD_STATUS,
        payload: value,
    };
};

// Set logged in user
export const setClass = value => {
    return {
        type: CLASS_LIST,
        payload: value
    };
};

export const setBloodGorup = value => {
    return {
        type: BLOOD_GROUP_LIST,
        payload: value
    };
};
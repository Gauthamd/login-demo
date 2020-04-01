const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
    studentfirstname: {
        type: String,
        required: true,
    },
    studentlastname: {
        type: String,
        required: true,
    },
    studentDOB: {
        type: String,
        required: true,
    },
    studentclass: {
        type: String,
        required: true,
    },
    studentsection: {
        type: String,
        required: true,
    },
    studentbloodgroup: {
        type: String,
        required: true,
    },
    studentcommunity: {
        type: String,
        required: true,
    },
    fatherfirstname: {
        type: String,
        required:true,
    },
    fatherlastname: {
        type: String,
        required: true,
    },
    fatheroccupation: {
        type: String,
        required: true,
    },
    fatherDOB: {
        type:String,
        required: true,
    },
    fatherbloodgroup: {
        type: String,
        required: true,
    },
    motherfirstname: {
        type: String,
        required:true,
    },
    motherlastname: {
        type: String,
        required: true,
    },
    motheroccupation: {
        type: String,
        required: true,
    },
    motherDOB: {
        type:String,
        required: true,
    },
    motherbloodgroup: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required:true,
    },
    phonenumber1: {
        type: String,
        required: true
    },
    phonenumber2: {
        type: String,
        required: false,
    }

});

module.exports = CountryList = mongoose.model("Students", StudentSchema);
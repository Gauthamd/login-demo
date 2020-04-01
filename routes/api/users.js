const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const keys = require("../../config/keys");
var moment = require("moment");
const Schema = mongoose.Schema;
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
const Students = require("../../models/Students");



// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/newadmission
// @desc Register user
// @access Public
router.post("/newadmission", (req, res) => {


  Students.find({}).then(student => {

    const newstudent = new Students({
      studentfirstname: req.body.studentfirstname,
      studentlastname: req.body.studentlastname,
      studentclass: req.body.studentclass,
      studentDOB: moment(req.body.studentDOB).format("dd/MM/yyyy"),
      studentsection: req.body.studentsection,
      studentbloodgroup: req.body.studentbloodgroup,
      studentcommunity: req.body.studentcommunity,
      fatherfirstname: req.body.fatherfirstname,
      fatherlastname: req.body.fatherlastname,
      fatherDOB: moment(req.body.fatherDOB).format("dd/MM/yyyy"),
      fatheroccupation: req.body.fatheroccupation,
      fatherbloodgroup: req.body.fatherbloodgroup,
      motherfirstname: req.body.motherfirstname,
      motherlastname: req.body.motherlastname,
      motherDOB: moment(req.body.motherDOB).format("dd/MM/yyyy"),
      motheroccupation: req.body.motheroccupation,
      motherbloodgroup: req.body.motherbloodgroup,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country,
      phonenumber1: req.body.phonenumber1,
      phonenumber2: req.body.phonenumber2,

    });

    console.log(newstudent);

    newstudent
      .save()
      .then(student => res.json({
        success: true,
      }))
      .catch(err => console.log(err));







  });

  // User.findOne({ email: req.body.email }).then(user => {
  //   if (user) {
  //     return res.status(400).json({ email: "Email already exists" });
  //   } else {
  //     const newUser = new User({
  //       firstName: req.body.firstName,
  //       lastName: req.body.lastName,
  //       email: req.body.email,
  //       password: req.body.password
  //     });
  //     // Hash password before saving in database
  //     bcrypt.genSalt(10, (err, salt) => {
  //       bcrypt.hash(newUser.password, salt, (err, hash) => {
  //         if (err) throw err;
  //         newUser.password = hash;
  //         newUser
  //           .save()
  //           .then(user => res.json(user))
  //           .catch(err => console.log(err));
  //       });
  //     });
  //   }
  // });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route get api/users/country
// @desc to get country list from DB.
router.get("/country", (req, res) => {

  find('countryList', {}, function (err, docs) {

    const payload = docs;


    // Sign token


    res.json({
      success: true,
      value: payload,
    });

  });



});

// @route get api/users/class
// @desc to get country list from DB.
router.get("/class", (req, res) => {

  find('Classes', {}, function (err, docs) {

    const payload = docs;


    // Sign token


    res.json({
      success: true,
      value: payload,
    });

  });



});


// @route get api/users/bloodgroup
// @desc to get country list from DB.
router.get("/bloodgroup", (req, res) => {

  find('Bloodgroup', {}, function (err, docs) {

    const payload = docs;


    // Sign token


    res.json({
      success: true,
      value: payload,
    });

  });



});

function find(name, query, cb) {
  mongoose.connection.db.collection(name, function (err, collection) {
    collection.find(query).toArray(cb)
  });
}











module.exports = router;
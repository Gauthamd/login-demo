import React, { Component } from 'react';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Cardcontent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Divder from '@material-ui/core/Divider';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers/';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { FormControl, InputLabel, Select, MenuItem, Snackbar } from '@material-ui/core';
import { addNewStudent } from "../../actions/valueActions";
import { connect } from "react-redux";
import { compose } from "redux";
import MuiAlert from '@material-ui/lab/Alert';


const Styles = (theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        marginTop: '60px',
        padding: theme.spacing(3),
    },
    card: {
        boxShadow: '0px 5px 5px grey',
    },
    addmissionForm: {
        padding: theme.spacing(11),

    },
    button: {
        left: '48%',
    },
    uploadText: {
        textAlign: 'center',
    },
    textField: {
        width: '20vw',
        marginLeft: '30px',
        marginTop: '10px',
    },
    datepicker: {
        width: '20vw',
        marginLeft: '30px',
    },
    formControl: {
        width: '8vw',
        margin: theme.spacing(1),
        marginLeft: '30px',
        marginTop: '10px'
    },
    row: {
        marginTop: '40px',
    },
    fatherTypo: {
        marginBottom: '20px',
    },
    fatherdatepicker: {
        marginTop: '40px',
    }

});


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Admission(props) {
    //const classes = useStyles();
    var today = new Date(Date.now());
    const [studentSelectedDate, setStudentSelectedDate] = React.useState(today);
    const [snackbarOpen, setSnackBarOpen]= React.useState(false);
    const [successSnackBar, setsuccessSnackbar] = React.useState(false);
    const [fatherSelectedDate, setFatherSelectedDate] = React.useState(today);
    const [motherSelectedDate, setmotherSelectedDate] = React.useState(today);
    const [state, setState] = React.useState({
        value: '',
        name: '',
    });
    // const [textFieldError, setTextFieldError ] = React.useState(false);
    const [Flag, setFlag] = React.useState('200');

    const [SelectionValue, setSelectionValue] = React.useState([]);
    const [FNTextFieldError, setFNTextFieldError] = React.useState(false);
    const [FNTextFieldHelperText, setFNTextFieldHelperText] = React.useState('');
    const [LNTextFieldError, setLNTextFieldError] = React.useState(false);
    const [LNTextFieldHelperText, setLNTextFieldHelperText] = React.useState('');
    const [CommunityTextFieldError, setCommunityTextFieldError] = React.useState(false);
    const [CommunityTextFieldHelperText, setCommunityTextFieldHelperText] = React.useState('');
    const [FatherFNTextFieldError, setFatherFNTextFieldError] = React.useState(false);
    const [FatherFNTextFieldHelperText, setFatherFNTextFieldHelperText] = React.useState('');
    const [FatherLNTextFieldError, setFatherLNTextFieldError] = React.useState(false);
    const [FatherLNTextFieldHelperText, setFatherLNTextFieldHelperText] = React.useState('');
    const [FatherOccTextFieldError, setFatherOccTextFieldError] = React.useState(false);
    const [FatherOccTextFieldHelperText, setFatherOccTextFieldHelperText] = React.useState('');
    const [MotherFNTextFieldError, setMotherFNTextFieldError] = React.useState(false);
    const [MotherFNTextFieldHelperText, setMotherFNTextFieldHelperText] = React.useState('');
    const [MotherLNTextFieldError, setMotherLNTextFieldError] = React.useState(false);
    const [MotherLNTextFieldHelperText, setMotherLNTextFieldHelperText] = React.useState('');
    const [MotherOccTextFieldError, setMotherOccTextFieldError] = React.useState(false);
    const [MotherOccTextFieldHelperText, setMotherOccTextFieldHelperText] = React.useState('');
    const [AddressTextFieldError, setAddressTextFieldError] = React.useState(false);
    const [AddressTextFieldHelperText, setAddressTextFieldHelperText] = React.useState('');
    const [CityTextFieldError, setCityTextFieldError] = React.useState(false);
    const [CityTextFieldHelperText, setCityTextFieldHelperText] = React.useState('');
    const [StateTextFieldError, setStateTextFieldError] = React.useState(false);
    const [StateTextFieldHelperText, setStateTextFieldHelperText] = React.useState('');
    const [ZipTextFieldError, setZipTextFieldError] = React.useState(false);
    const [ZipTextFieldHelperText, setZipTextFieldHelperText] = React.useState('');
    const [PhnNum1TextFieldError, setPhnNum1TextFieldError] = React.useState(false);
    const [PhnNum1TextFieldHelperText, setPhnNum1TextFieldHelperText] = React.useState('');



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackBarOpen(false);
        setsuccessSnackbar(false);
      };

    const handleChange = event => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });

        if (name === "class") {
            classValue.forEach(element => {
                if (element.name === event.target.value) {
                    let sectionValue = [];
                    for (var index = 0; index < element.section.length; index++) {
                        const valuedata = {
                            name: element.section[index],
                        }
                        sectionValue.push(valuedata);
                    }
                    setSelectionValue(sectionValue);
                }
            })
        }
        if (name === "studentFirstName") {
            if (event.target.value.length > 1) {
                setFNTextFieldError(false);
                setFNTextFieldHelperText('');
                setFlag("200");
                

            }
        }
        if (name === "studentLastName") {
            if (event.target.value.length > 1) {
                setLNTextFieldError(false);
                setLNTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "studentCommunity") {
            if (event.target.value.length > 1) {
                setCommunityTextFieldError(false);
                setCommunityTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "fatherFirstName") {
            if (event.target.value.length > 1) {
                setFatherFNTextFieldError(false);
                setFatherFNTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "fatherLastName") {
            if (event.target.value.length > 1) {
                setLNTextFieldError(false);
                setLNTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "fatherOccupation") {
            if (event.target.value.length > 1) {
                setFatherOccTextFieldError(false);
                setFatherOccTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "motherFirstName") {
            if (event.target.value.length > 1) {
                setMotherFNTextFieldError(false);
                setMotherFNTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "motherLastName") {
            if (event.target.value.length > 1) {
                setLNTextFieldError(false);
                setLNTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "motherOccupation") {
            if (event.target.value.length > 1) {
                setMotherOccTextFieldError(false);
                setMotherOccTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "address") {
            if (event.target.value.length > 1) {
                setAddressTextFieldError(false);
                setAddressTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "city") {
            if (event.target.value.length > 1) {
                setCityTextFieldError(false);
                setCityTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "stateVal") {
            if (event.target.value.length > 1) {
                setStateTextFieldError(false);
                setStateTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "zip") {
            if (event.target.value.length > 1) {
                setZipTextFieldError(false);
                setZipTextFieldHelperText('');
                setFlag("200");

            }
        }
        if (name === "phoneNumber1") {
            if (event.target.value.length > 1) {
                setPhnNum1TextFieldError(false);
                setPhnNum1TextFieldHelperText('');
                setFlag("200");

            }
        }
        if(name === "class")
        {
            if(event.target.value.length >1) {
                setSnackBarOpen(false);
            }
        }
    };
    const handleClick = event => {

        if (state.studentFirstName === undefined || state.studentFirstName === "") {
            setFNTextFieldError(true);
            setFNTextFieldHelperText('First Name is Mandatory');
            setFlag("500");
        }
        if (state.studentLastName === undefined || state.studentLastName === "") {
            setLNTextFieldError(true);
            setLNTextFieldHelperText('Last Name is Mandatory');
            setFlag("500");
        }
        if (state.studentCommunity === undefined || state.studentCommunity === "") {
            setCommunityTextFieldError(true);
            setCommunityTextFieldHelperText("Community should be specified");
            setFlag("500");
        }
        if ((state.fatherFirstName === undefined) || (state.fatherFirstName === "")) {
            setFatherFNTextFieldError(true);
            setFatherFNTextFieldHelperText("Father First Name is Required")
            setFlag("500");
        }
        if ((state.fatherLastName === undefined) || (state.fatherLastName === "")) {
            setFatherLNTextFieldError(true);
            setFatherLNTextFieldHelperText("Father Last Name is Required")
            setFlag("500");
        }

        if ((state.fatherOccupation === undefined) || (state.fatherOccupation === "")) {
            setFatherOccTextFieldError(true);
            setFatherOccTextFieldHelperText("Father Occupation is Required")
            setFlag("500");
        }
        if ((state.motherFirstName === undefined) || (state.motherFirstName === "")) {
            setMotherFNTextFieldError(true);
            setMotherFNTextFieldHelperText("mother First Name is Required")
            setFlag("500");
        }
        if ((state.motherLastName === undefined) || (state.motherLastName === "")) {
            setMotherLNTextFieldError(true);
            setMotherLNTextFieldHelperText("mother Last Name is Required")
            setFlag("500");
        }

        if (state.motherOccupation === undefined || state.motherOccupation === "") {
            setMotherOccTextFieldError(true);
            setMotherOccTextFieldHelperText("Mother Occupation is Required")
            setFlag("500");
        }
        if (state.address === undefined || state.address === "") {
            setAddressTextFieldError(true);
            setAddressTextFieldHelperText("Address is Required")
            setFlag("500");
        }
        if (state.city === undefined || state.city === "") {
            setCityTextFieldError(true);
            setCityTextFieldHelperText("City is Required")
            setFlag("500");
        }

        if (state.stateVal === undefined || state.stateVal === "") {
            setStateTextFieldError(true);
            setStateTextFieldHelperText("State is Required")
            setFlag("500");
        }
        if (state.zip === undefined || state.zip === "") {
            setZipTextFieldError(true);
            setZipTextFieldHelperText("Zip is Required");
            setFlag("500");
        }
        if (state.phonenumber1 === undefined || state.phonenumber1 === "") {
            setPhnNum1TextFieldError(true);
            setPhnNum1TextFieldHelperText("Phone Number is Required");
            setFlag("500");
        }
        if((state.class === undefined || state.class === "") || (state.section === undefined || state.section === "") || (state.blood_group === undefined || state.blood_group === "") || (state.fatherbloodgroup === undefined || state.fatherbloodgroup === "") || (state.motherbloodgroup === undefined || state.motherbloodgroup ==="") || (state.country === undefined || state.country === ""))
        {
            setSnackBarOpen(true);
            setFlag("500");
        }
        if (Flag === "200") {

            const newStudent ={
                studentfirstname: state.studentFirstName,
                studentlastname: state.studentLastName,
                studentDOB: studentSelectedDate,
                studentclass: state.class,
                studentsection: state.section,
                studentbloodgroup: state.blood_group,
                studentcommunity: state.studentCommunity,
                fatherfirstname: state.fatherFirstName,
                fatherlastname: state.fatherLastName,
                fatherDOB: fatherSelectedDate,
                fatherbloodgroup: state.fatherbloodgroup,
                fatheroccupation: state.fatherOccupation,
                motherfirstname: state.motherFirstName,
                motherlastname: state.motherLastName,
                motherDOB: motherSelectedDate,
                motherbloodgroup: state.motherbloodgroup,
                motheroccupation: state.motherOccupation,
                address: state.address,
                city: state.city,
                state: state.stateVal,
                zip: state.zip,
                country: state.country,
                phonenumber1: state.phonenumber1,
                phonenumber2: state.phonenumber2,

            }

            props.addNewStudent(newStudent);

            if(props.newStudentStatus)
            {
                setsuccessSnackbar(true);
            }
            


        }


    }

    const handleStudentDateChange = date => {
        setStudentSelectedDate(date);
    };

    const handleFatherDateChange = date => {
        setFatherSelectedDate(date);
    };

    const handleMotherDateChange = date => {
        setmotherSelectedDate(date);
    };




    let values = [];
    const countryVal = [];
    values = props.countryList["countryList"];
    values.forEach(element => {
        const value = {
            name: element["name"],
            code: element["code"],
        }
        countryVal.push(value);
    });
    let classValue = [];
    values = props.classList["classList"]
    values.forEach(element => {

        const value = {
            name: element["Class"],
            section: element["Section"],
        }
        classValue.push(value);
    });
    let bloodGroupVal = [];
    values = props.bloodGroupList["bloodGroupList"]
    values.forEach(element => {
        const value = {
            name: element["Blood"],
        }
        bloodGroupVal.push(value);
    });






    const { classes, children, className, countryList,classList,bloodGroupList, ...other } = props;
    return (
        
        <div className={classes.content}>
            <Card className={classes.card}>
                <Cardcontent className={classes.uploadText}>
                    <Typography variant="h7" >Please upload the portal file to load or continue with manual Admission</Typography>
                </Cardcontent>
                <Cardcontent>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload
                    </Button>
                </Cardcontent>
                <Cardcontent>
                    <Divder />
                </Cardcontent>
                <Cardcontent>
                    <Typography variant="h5">Student Details</Typography>
                    <form className={classes.addmissionForm}>
                        <Grid container direction="row">
                            <TextField className={classes.textField} error={FNTextFieldError} helperText={FNTextFieldHelperText} id="outlined-basic" label={FNTextFieldError ? "Error" : "First Name"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'studentFirstName',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} error={LNTextFieldError} helperText={LNTextFieldHelperText} id="outlined-basic" label={LNTextFieldError ? "Error" : "Last Name"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'studentLastName',
                                id: 'outlined-basic'
                            }} />
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date Of Birth"
                                    value={studentSelectedDate}
                                    onChange={handleStudentDateChange}
                                    className={classes.datepicker}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </MuiPickersUtilsProvider>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-class-native-simple">Class</InputLabel>
                                <Select
                                    value={state.class}
                                    onChange={handleChange}
                                    label="Class"
                                    //error="true"
                                    //helperText="Required"
                                    inputProps={{
                                        name: 'class',
                                        id: 'outlined-class-native-simple',
                                    }}
                                >
                                    {classValue.map((value, text) => (
                                        <MenuItem value={value.name}>{value.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid container direction="row" className={classes.row}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-section-native-simple">Section</InputLabel>
                                <Select
                                    value={state.section}
                                    onChange={handleChange}
                                    label="Section"
                                    inputProps={{
                                        name: 'section',
                                        id: 'outlined-section-native-simple',
                                    }}
                                >
                                    {SelectionValue.map((value, index) => (
                                        <MenuItem value={value.name}>{value.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-blood-native-simple">Blood Group</InputLabel>
                                <Select
                                    value={state.blood_group}
                                    onChange={handleChange}
                                    label="Blood Group"
                                    inputProps={{
                                        name: 'blood_group',
                                        id: 'outlined-blood-native-simple',
                                    }}
                                >
                                    {bloodGroupVal.map((value, text) => (
                                        <MenuItem value={value.name}>{value.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField className={classes.textField} error={CommunityTextFieldError} helperText={CommunityTextFieldHelperText} id="outlined-basic" label={CommunityTextFieldError ? "Error" : "Community"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'studentCommunity',
                                id: 'outlined-basic',
                            }} />

                        </Grid>


                    </form>
                </Cardcontent>
                <Cardcontent>
                    <Divider />
                </Cardcontent>
                <Cardcontent>
                    <Typography variant="h5">Parents Details</Typography>
                    <form className={classes.addmissionForm}>
                        <Typography className={classes.fatherTypo}>Father Details</Typography>
                        <Grid container direction="row">
                            <TextField className={classes.textField} error={FatherFNTextFieldError} helperText={FatherFNTextFieldHelperText} id="outlined-basic" label={FatherFNTextFieldError ? "Error" : "Father First Name"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'fatherFirstName',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} error={FatherLNTextFieldError} helperText={FatherLNTextFieldHelperText} id="outlined-basic" label={FatherLNTextFieldError ? "Error" : "Father Last Name"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'fatherLastName',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} error={FatherOccTextFieldError} helperText={FatherOccTextFieldHelperText} id="outlined-basic" label={FatherOccTextFieldError ? "Error" : "Occupation"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'fatherOccupation',
                                id: 'outlined-basic',
                            }} />
                        </Grid>
                        <Grid container direction="row" className={classes.row}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date Of Birth"
                                    value={fatherSelectedDate}
                                    onChange={handleFatherDateChange}
                                    className={classes.datepicker}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </MuiPickersUtilsProvider>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-blood-native-simple">Blood Group</InputLabel>
                                <Select
                                    value={state.fatherbloodgroup}
                                    onChange={handleChange}
                                    label="Blood Group"
                                    inputProps={{
                                        name: 'fatherbloodgroup',
                                        id: 'outlined-blood-native-simple',
                                    }}
                                >
                                    {bloodGroupVal.map((value, text) => (
                                        <MenuItem value={value.name}>{value.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </form>
                    <form className={classes.addmissionForm}>
                        <Typography className={classes.fatherTypo}>Mother Details</Typography>
                        <Grid container direction="row">
                            <TextField className={classes.textField} error={MotherFNTextFieldError} helperText={MotherFNTextFieldHelperText} id="outlined-basic" label={MotherFNTextFieldError ? "Error" : "Mother First Name"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'motherFirstName',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} error={MotherLNTextFieldError} helperText={MotherLNTextFieldHelperText} id="outlined-basic" label={MotherLNTextFieldError ? "Error" : "Mother Last Name"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'motherLastName',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} error={MotherOccTextFieldError} helperText={MotherOccTextFieldHelperText} id="outlined-basic" label={MotherOccTextFieldError ? "Error" : "Occupation"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'motherOccupation',
                                id: 'outlined-basic',
                            }} />
                        </Grid>
                        <Grid container direction="row" className={classes.row}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date Of Birth"
                                    value={motherSelectedDate}
                                    onChange={handleMotherDateChange}
                                    className={classes.datepicker}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            </MuiPickersUtilsProvider>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-blood-native-simple">Blood Group</InputLabel>
                                <Select
                                    value={state.motherbloodgroup}
                                    onChange={handleChange}
                                    label="Blood Group"
                                    inputProps={{
                                        name: 'motherbloodgroup',
                                        id: 'outlined-blood-native-simple',
                                    }}
                                >
                                    {bloodGroupVal.map((value, text) => (
                                        <MenuItem value={value.name}>{value.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </form>
                </Cardcontent>
                <Cardcontent>
                    <Divider />
                </Cardcontent>
                <Cardcontent>
                    <Typography variant="h5">Address & Contact Details</Typography>
                    <form className={classes.addmissionForm}>
                        <Grid container direction="row">
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                multiline
                                rows="3"
                                className={classes.textField}
                                style={{ width: '80vw' }}
                                variant="outlined"
                                error={AddressTextFieldError}
                                helperText={AddressTextFieldHelperText}
                                onChange={handleChange}
                                InputProps={{
                                    name: 'address',
                                    id: 'outlined-basic',
                                }} />

                        </Grid>


                        <Grid container className={classes.row}>
                            <TextField className={classes.textField} error={CityTextFieldError} helperText={CityTextFieldHelperText} id="outlined-basic" label={CityTextFieldError ? "Error" : "City"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'city',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} error={StateTextFieldError} helperText={StateTextFieldHelperText} id="outlined-basic" label={StateTextFieldError ? "Error" : "State"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'stateVal',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} error={ZipTextFieldError} helperText={ZipTextFieldHelperText} id="outlined-basic" label={ZipTextFieldError ? "Error" : "Zip"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'zip',
                                id: 'outlined-basic',
                            }} />
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel htmlFor="outlined-country-native-simple">Country</InputLabel>
                                <Select
                                    value={state.country}
                                    onChange={handleChange}
                                    label="Country"
                                    inputProps={{
                                        name: 'country',
                                        id: 'outlined-country-native-simple',
                                    }}
                                >
                                    {countryVal.map((value, text) => (
                                        <MenuItem value={value.name}>{value.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid container className={classes.row}>
                            <TextField className={classes.textField} error={PhnNum1TextFieldError} helperText={PhnNum1TextFieldHelperText} id="outlined-basic" label={PhnNum1TextFieldError ? "Error" : "Contact Number 1"} variant="outlined" onChange={handleChange} InputProps={{
                                name: 'phonenumber1',
                                id: 'outlined-basic',
                            }} />
                            <TextField className={classes.textField} id="outlined-basic" label="Contact Number 2" variant="outlined" onChange={handleChange} InputProps={{
                                name: 'phonenumber2',
                                id: 'outlined-basic',
                            }} />
                        </Grid>
                    </form>
                </Cardcontent>
                <Cardcontent>
                    <Button variant="contained" color="primary" className={classes.button} onClick={handleClick}>Create Admission</Button>
                </Cardcontent>
                <Cardcontent>
                <Snackbar open={successSnackBar} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            New Admission is done !!
                        </Alert>
                    </Snackbar>
                    <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            Please select the required fields!
                        </Alert>
                    </Snackbar>
                </Cardcontent>
            </Card>
        </div>
    );

}


Admission.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    countryList: PropTypes.object.isRequired,
    classList: PropTypes.object.isRequired,
    bloodGroupList: PropTypes.object.isRequired,
    newStudentStatus: PropTypes.string,
    addNewStudent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    countryList: state.countryList,
    classList: state.classList,
    bloodGroupList: state.bloodGroupList,
    newStudentStatus: state.studentAddStatus,
});

export default compose(connect(mapStateToProps, { addNewStudent }), withStyles(Styles))(Admission);
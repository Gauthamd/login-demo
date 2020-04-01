import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { Link, BrowserRouter, Switch,Route } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../App.scss';
//import './dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dashboardappbar from './Dashboardappbar';
import PrivateRoute from "../private-route/PrivateRoute";
import Admission from './Admission';
//import Dashboardcontent from './Dashboardcontent';




class Dashboard extends Component {





    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <BrowserRouter>
                    <Dashboardappbar user={user} onLogoutClick={this.onLogoutClick} >

                        <Switch>
                            <PrivateRoute exact path="/Admission" component={Admission} auth={this.props.auth}/>
                        </Switch>

                    </Dashboardappbar>
                </BrowserRouter>

            </div>

        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    countryList: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    CountryList: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
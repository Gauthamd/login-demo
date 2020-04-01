import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./NavbarVal";
import Landing from "./Landing";
import Login from "../auth/Login";
import { Link } from "react-router-dom";

class DefaultContainer extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Route exact path="/" exact component={Landing} />
                </Router>
            </div>
        )
    }
}

export default DefaultContainer;
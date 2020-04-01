import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../App.scss';
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Landing extends Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div class="landing">
        <div class="landing-header">
          <div class="container-lg landing-nav">
            <nav class="navbar navbar-expand-lg navbar-light .bg-transparent">
              <a class="navbar-brand" href="/" class="text-white" >Navbar</a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-3 my-lg-0 ml-auto">
                  {/*<button class="btn btn-secondary my-2 my-sm-2" type="submit" style={{backgroundColor: "#f06292"}}>Login</button>*/}
                  <Link to="/login" style={{backgroundColor: "#f06292"}} class="btn btn-secondary my-2 my-sm-2" >Login</Link>
                </form>
              </div>
            </nav>
          </div>
        </div>
        <div class="landing-content">
          <h4>
             <b>Welcome</b> to the School Management system.
          </h4>
          <p>Better in Management of details for school and colleges
            <br/>Want to contact us? Please click on contact us for more details.</p>
        </div>
        <div class="landing-footer">
           <h1>About us</h1>
           <p>This is a school/ College advanced cloud<br/>
              Management system that holds the details<br/>
              in cloud for all usages.</p>
        </div>
      </div>
    );
  }
}

Landing.prototypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(Landing);
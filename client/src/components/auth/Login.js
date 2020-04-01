import React, { Component } from "react";
import ReactDom from "react-dom";
import './materialtextfield.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;
    //const classes = useStyles()
    return (

      <div>
        <div class="row">
          <div class="col-sm-6 col-md-6">
            <div class="leftsection">
              <div class="login-page-form">
                <section class="leftsection">
                  <div class="center-para">
                    <h4>Log in to Manage</h4>
                    <p> Log in to manage the best in class details management product</p>
                  </div>
                  <div class="clr20"></div>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div class="row">
                      <div class="col-sm-12 email-input">
                        <div class="form-group">
                          <div class="material-textfield">
                            <input placeholder=" "
                              type="text"
                              name="email"
                              id="email"
                              value={this.state.email}
                              error={errors.email}
                              onChange={this.onChange}
                              className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                              })} />
                            <label>Email or Username *</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 password-input">
                        <div class="form-group">
                          <div class="material-textfield">
                            <input placeholder=" "
                              type="password" 
                              name="password"
                              value={this.state.password}
                              error={errors.email}
                              onChange={this.onChange}
                              className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                              })}/>
                            <label>Password*</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 password-input">
                        <div class="form-group">
                          <div class="form-group-button">
                            <button type="submit" style={{ color: "white" }} class="ninja-button">Login</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </form>
                </section>

              </div>

            </div>
          </div>
          <div class="col-sm-6 col-md-6">
            <div class="rightsection">

            </div>
          </div>

        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
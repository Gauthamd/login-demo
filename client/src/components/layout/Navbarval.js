import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';
class Navbarval extends Component {
  render() {
    return (
      <Navbar style={{backgroundColor: "transparent"}} className="justify-content-start">
        <Navbar.Brand href="/login"><p class="text-white">SBOX</p></Navbar.Brand>
      </Navbar >

      /*<div  className="Navbar-fixed N/A transparent" >
        <nav>
          <div className="N/A transparent N/A transparent" >
          <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center white-text"
            >SBOX
            </Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><Link
               to="/login"
             >Log In</Link></li>
            </ul>
            
          </div>
        </nav>
            </div>*/
      
    );
  }
}
export default Navbarval;
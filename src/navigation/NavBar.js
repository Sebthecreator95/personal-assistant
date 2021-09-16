import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {Navbar,DropdownButton,Nav,Row, Col, Container, Dropdown} from 'react-bootstrap';
import UserContext from "../authentication/UserContext";
import "./Navbar.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
          <DropdownButton  title="PAM" id="responsive-navbar-nav">
          <Dropdown.Item >
                <NavLink class="nav-link" to="/profile">
                    {currentUser.username}'s Schedule
                </NavLink>
              </Dropdown.Item >
              <Dropdown.Item >
                <NavLink class="nav-link" to="/profile/edit">
                  Edit Profile
                </NavLink>
              </Dropdown.Item>
              
              <Dropdown.Item>
                <Link class="nav-link" to="/" onClick={logout}>
                  Log out {currentUser.username}
                </Link>
              </Dropdown.Item>
            </DropdownButton>
        );
      }

      function loggedOutNav() {
        return (
            <DropdownButton  title="PAM" id="responsive-navbar-nav">
              <Dropdown.Item >
                <NavLink class="nav-link" to="/login">
                  LogIn
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink class="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </Dropdown.Item>
            </DropdownButton>
        );
      }


return (
  <Container>
    <Row>
      
      
      <Col md ={8}>

    <Navbar className="Navigation navbar" sticky="top" Container>
    
      <center>
      <Link className="navbar-brand" to={currentUser ? `/${currentUser.username}`: "/welcome"}>
      <img className = "navbar-icon" src="https://www.kindpng.com/picc/m/66-663423_virtual-assistant-png-transparent-png.png" alt="personal assistants drawing"/>
      </Link>
      </center>
      <Container>
    <Col md ={4}>
      <Navbar.Collapse>
      <Nav>
      
      {currentUser ? loggedInNav() : loggedOutNav()}
      
      </Nav>
      </Navbar.Collapse>
      </Col>
    
    
    </Container>
    </Navbar>
    </Col>
   
  
    </Row>
    </Container>
);
}

export default NavBar;
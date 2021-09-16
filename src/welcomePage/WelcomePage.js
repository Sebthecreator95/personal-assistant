import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./welcomePage.css";
import UserContext from "../authentication/UserContext";

function WelcomePage() {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);
  
    return (
        <div class="Welcomepage">
          <div className="container text-center">
            <h1 className="mb-4 font-weight-bold" class = "welcome-heading">Welcome!</h1>
            <small className="lead">To your very own personal asssistant available 24/.7.</small>
            {currentUser
                ? <h2>
                  Welcome Back, {currentUser.username}!
                </h2>
                : (
                    <Container>
                      <Row>
                        <Col>
                          <Button variant="outline-success" class="button" >
                      <Link className="btn btn-primary font-weight-bold mr-3"
                            to="/login">
                        Log in
                      </Link>
                      </Button>
                      
                      </Col>
                      <Col>
                        
                        <Button class="button" >
                      <Link className="btn btn-primary font-weight-bold"
                            to="/signup">
                        Sign up
                      </Link>
                      </Button>
                     
                      </Col>
                      </Row>
                    </Container>
                )}
            
            <Container>
            <Row><h4 class="heading">About</h4></Row>
              <div >
              <center>
            <p class="about">
                PAM was designed for people in all walks of life. 
                From assisting the elderly to helping a forgetful student. 
                Even the best of us tend to forget big or even small details in our everyday lifes.
                In order to be more efficient and less forgetful.
                PAM is a place where it is easy to manage upcoming appointments, meetings, daily reminders and any special evnts.
                
            </p>
            </center>
            </div>
            </Container>
            <Container>
            <Row><h4 class="heading">Website Design</h4></Row>
              <div >
              <center>
            <p class="website-design">
                This app was built with:
                <ul>
                  <li>
                    React
                  </li>
                </ul>
                
            </p>
            </center>
            </div>
            </Container>
          </div>
          </div>
    );
  }
  
  export default WelcomePage;
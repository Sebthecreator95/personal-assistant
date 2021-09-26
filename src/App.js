import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import UserContext from "./authentication/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import PamApi from "./api/api";
import jwt from "jsonwebtoken";
import NavBar from "./navigation/NavBar";
import Routes from "./navigation/Routes";

export const TOKEN_STORAGE_ID = "pam-token";

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          PamApi.token = token;
          let currentUser = await PamApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await PamApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }
  async function login(loginData) {
    try {
      let token = await PamApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  return (
    <div className="App">
      <UserContext.Provider
            value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
      <center>
        <NavBar logout={logout}/>
        <Routes login={login} signup={signup}/>
        </center>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;

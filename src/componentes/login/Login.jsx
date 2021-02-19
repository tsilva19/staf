import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/staffing-image.png";

// import studyIcon from "../../assets/images/icons/study.svg";
// import giveClassesIcon from "../../assets/images/icons/give-classes.svg";

import TextField from "@material-ui/core/TextField/TextField";

import "./Login.css";
import { Button, FormGroup, FormControl, Grid } from "@material-ui/core";
import LoginIcon from "@material-ui/icons/Input";

function Login() {
  const [totalConnections, setTotalConnections] = useState(0);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Staffing" />
          <h2>Sua plataforma de staffing.</h2>
        </div>

        <div className="landing-image">
          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </div>

        <div className="buttons-container">
          <TextField
            label="Iniciais"
            variant="filled"
            style={{
              marginRight: 20,
            }}
          />

          <TextField
            label="Senha"
            variant="filled"
            type="password"
            style={{
              marginRight: 20,
            }}
          />
          <Link to="/home">
          
          <Button variant="contained" color="primary" endIcon={<LoginIcon />}>
            Logar
          </Button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
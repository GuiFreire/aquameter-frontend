import React from "react";
import Logo from "../assets/logo.png";
import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import "../assets/home.css";

const NavBar = ({ children }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleHome = async () => {
    await signOut();
    navigate("/home");
  };
  const handleSensor = async () => {
    await signOut();
    navigate("/cadastro-sensor");
  };

  return (
    <div className="content">
      <div className="homeHeader">
        <div className="iconHome">
          <img className="home-logo" src={Logo} alt="Aqua Meter Logo" />
        </div>
        <div className="infoHeader">
          <Grid className="buttonsHeader">
            <Button sx={6} onClick={handleHome} variant="text">
              Home
            </Button>
            <Button sx={6} onClick={handleSensor} variant="text">
              Cadastro Sensor
            </Button>
          </Grid>
          <div className="textHeader">
            <p className="simpleText">
              Olá, <b className="boldBlueText">{user.name}</b>
            </p>
            <Button onClick={handleSignOut} variant="text">
              sair
            </Button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default NavBar;

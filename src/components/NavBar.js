import React from "react";
import Logo from "../assets/logo.png";
import { useAuth } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material"
import "../assets/home.css";

const NavBar = ({ children }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="content">
      <div className="homeHeader">
        <div className="iconHome">
          <img className="home-logo" src={Logo} alt="Aqua Meter Logo" />
        </div>
        <div className="infoHeader">
          <div className="textHeader">
            <p className="simpleText">
              Olá, <b className="boldBlueText">{user.name}</b>
            </p>
          </div>
          <Button onClick={handleSignOut} variant="text">sair</Button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default NavBar;

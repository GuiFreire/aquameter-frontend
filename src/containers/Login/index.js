import React, { useState } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { TextField, Button } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signOut, user } = useAuth();

  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLoginClick = async () => {
    try {
      const response = await signIn({ document, password });
      if (response.isValid) {
        navigate("/home");
      } else {
        setStatus("Usuário ou senha incorretos.");
      }
    } catch (error) {
      signOut();
      setStatus("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="login-content">
      <img className="login-logo" src={Logo} alt="Aqua Meter Logo" />
      <div className="login-content-input">
        <div>
          <p>Login</p>
          <TextField
            type="text"
            onChange={(event) => setDocument(event.target.value)}
            variant="outlined"
          />
        </div>
        <div>
          <p>Senha</p>
          <TextField
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            variant="outlined"
          />
        </div>
        {status}
      </div>
      <div className="buttonLogin">
        <Button onClick={handleLoginClick} variant="contained">Entrar</Button>
      </div>
      <div className="register">
        <p>Ainda não tem uma conta? <a className="linkCadastro" href="/cadastro">Cadastre-se</a> agora</p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState, useEffect } from "react";
import "./login.css";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const { signIn, signOut, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLoginClick = async () => {
    try {
      await signIn({ email, password });

      navigate("/home");
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
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <p>Senha</p>
          <input
            type="text"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {status}
      </div>
      <div className="buttonLogin">
        <button onClick={handleLoginClick}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;

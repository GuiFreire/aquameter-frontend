import React, { useState } from "react";
import "./register.css";
import Logo from "../../assets/logo.png";
import { createLogin } from "../../api/login";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const [password, setPassword] = useState("");

    const handleCancelClick = async () => {
        navigate("/")
      };
    
    const handleRegisterClick = async () => {
        try {
            const response = await createLogin({ name, document, password });
            navigate("/")
          } catch (error) {
            console.log(error)
          }
    }

    return (
        <div className="register-content">
            <img className="login-logo" src={Logo} alt="Aqua Meter Logo" />
            <div className="register-content-input">
                <div className="input">
                    <p>Nome</p>
                    <TextField
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className="input">
                    <p>CPF</p>
                    <TextField
                        type="text"
                        onChange={(event) => setDocument(event.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className="input">
                    <p>Senha</p>
                    <TextField
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className="buttons">
                    <Button variant="contained" color="error" onClick={handleCancelClick}>Voltar</Button>
                    <Button variant="contained" onClick={handleRegisterClick}>Cadastrar</Button>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useAuth } from "../../hooks/auth";
import { createSensor } from "../../api/sensor";

const RegisterSensor = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [name, setName] = useState("");
    const [sensorCode, setSensorCode] = useState("");

    const handleCancelClick = async () => {
        navigate("/home")
      };

    const handleRegisterSensorClick = async () => {
        try {
            const response = await createSensor(name, sensorCode, user.id);
            navigate("/home")
        } catch (error) {
            console.log(error)
        };
    };

    return (
        <div className="homeBody" id="sensorBody">
            <div className="register-content-input">
                <div className="input">
                    <p>Nome do sensor</p>
                    <TextField
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className="input">
                    <p>Código do sensor</p>
                    <TextField
                        type="text"
                        onChange={(event) => setSensorCode(event.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className="buttons">
                    <Button variant="contained" color="error" onClick={handleCancelClick}>Voltar</Button>
                    <Button variant="contained" onClick={handleRegisterSensorClick}>Cadastrar</Button>
                </div>
            </div>
        </div>
    );
};

export default RegisterSensor;
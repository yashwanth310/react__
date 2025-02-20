import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

const Register: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user.registeredUsers);

  const handleRegister = () => {
    if (!credentials.email || credentials.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (users.some(user => user.email === credentials.email)) {
      alert("User already exists. Please log in.");
      return;
    }

    dispatch(registerUser(credentials));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Register</Typography>
      <TextField fullWidth margin="normal" label="Email" type="email" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
      <TextField fullWidth margin="normal" label="Password" type="password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
};

export default Register;
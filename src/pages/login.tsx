import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state: RootState) => state.user.registeredUsers);

  const handleLogin = () => {
    if (users.some(user => user.email === credentials.email && user.password === credentials.password)) {
      dispatch(loginUser(credentials));
      navigate("/form");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Login</Typography>
      <TextField fullWidth margin="normal" label="Email" type="email" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
      <TextField fullWidth margin="normal" label="Password" type="password" onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
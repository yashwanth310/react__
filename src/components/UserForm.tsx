import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../redux/userSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storedUserData = useSelector((state: RootState) => state.user.userData);

 
  const [formData, setFormData] = useState({
    id: storedUserData?.id || `USR-${Math.floor(1000 + Math.random() * 9000)}`,
    name: storedUserData?.name || "",
    email: storedUserData?.email || "",
    address: storedUserData?.address || "",
    phone: storedUserData?.phone || "",
  });

  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isFormDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isFormDirty]);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormDirty(true);
  };

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(saveUserData(formData));
    setIsFormDirty(false);
    alert("User data saved successfully!");
    navigate("/profile"); 
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">User Data Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="User ID" name="id" value={formData.id} disabled />
        <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} required />
        <TextField fullWidth margin="normal" label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <TextField fullWidth margin="normal" label="Address" name="address" value={formData.address} onChange={handleChange} required />
        <TextField fullWidth margin="normal" label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default UserForm; 
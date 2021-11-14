import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import Login from "../../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import Navigation from "../../Home/Shared/Navigation/Navigation";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const navigate = useNavigate();
  const { user, registerNewUser, loading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Register successfully");
      return;
    }
    registerNewUser(
      registerData.email,
      registerData.password,
      registerData.name,
      navigate
    );
    e.preventDefault();
  };
  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 15 }} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Register
            </Typography>
            {!loading && (
              <form onSubmit={handleRegisterSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Retype Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  variant="standard"
                />

                <Button
                  sx={{ width: "75%", m: 3 }}
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: "#19D3AE" }}
                >
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/Login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {loading && <CircularProgress sx={{ mt: 10 }} />}
            {user?.email && (
              <Alert severity="success">
                User Created has been successfully!
              </Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item sx={{ mt: 1 }} xs={12} md={6}>
            <img style={{ width: "100%" }} src={Login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;

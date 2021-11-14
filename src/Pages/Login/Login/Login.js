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
import login from "../../../images/login.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../Home/Shared/Navigation/Navigation";
import useAuth from "./../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loading, authError, signInWithGoogle, loginUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = (e) => {
    signInWithGoogle(location, navigate);
  };

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 16 }} xs={12} md={6}>
            {loading && <CircularProgress sx={{ mb: 2 }} />}
            <Typography variant="body1" gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onChange={handleOnchange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnchange}
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 3 }}
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#19D3AE" }}
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
            </form>
            <p>--------------------------------</p>
            <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
            {user?.email && (
              <Alert severity="success">User Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item sx={{ mt: 1 }} xs={12} md={6}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;

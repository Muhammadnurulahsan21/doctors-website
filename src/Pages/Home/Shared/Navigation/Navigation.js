import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 3 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "start" }}
            >
              Doctors Portal
            </Typography>

            <NavLink to="/home" style={{ textDecoration: "none" }}>
              <Typography sx={{ mr: 5 }} color="white">
                Home
              </Typography>
            </NavLink>
            <NavLink to="/appointment" style={{ textDecoration: "none" }}>
              <Typography sx={{ mr: 5 }} color="white">
                Appointment
              </Typography>
            </NavLink>

            {user.email ? (
              <Typography sx={{ mr: 5 }} style={{ cursor: 'pointer'}} onClick={logOut} color="white">
                Log Out
              </Typography>
            ) : (
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Typography sx={{ mr: 5 }} color="white">
                  Login
                </Typography>
              </NavLink>
            )}
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Typography sx={{ mr: 5 }} color="white">
                Register
              </Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
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
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 5 }}>
            Doctors Portal
            </Typography>
            <Link to="/home" sx={{ mr: 5 }} style={{ textDecoration: "none" }}>Home</Link>
            <Link to="/appointment" sx={{ mr: 5 }} style={{ textDecoration: "none" }}>Appointment</Link>
            <NavLink to="/login" sx={{ mr: 5 }} style={{ textDecoration: "none" }} ><Button color="inherit">Login</Button></NavLink>
            
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navigation;

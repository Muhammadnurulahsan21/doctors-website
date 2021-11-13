import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import doctor from "../../../images/doctor.png";
import appointment from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${appointment})`,
  backgroundColor: "rgba(67, 74, 93, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            style={{ width: 680, marginTop: "-180px" }}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{
          display: 'flex', 
          justifyContent: 'flex-center', 
          alignItems: 'center', 
          textAlign: 'left',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          }}>
          <Box>
          <Typography variant="h6" sx={{ mb: 3}} style={{color: '#6ACECE', fontWeight: 400}}>
          APPOINTMENT
          </Typography>
          <Typography variant="h4" sx={{ mb: 1}}
          style={{ color: 'white', }}>
          Make an appointment 
          </Typography>
          <Typography variant="h4" sx={{ mb: 3}}
          style={{ color: 'white', }}>
          Today 
          </Typography>
          <Typography variant="h6"  sx={{ mb: 5}}
          style={{ color: 'white', fontWeight: 400 }}>
          It is a long established fact that a reader will be distractedly the readable <br />
          content of a page when looking at.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#19D3AE' }}>
          Learn More
          </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;

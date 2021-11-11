import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import doctor from "../../../images/doctor.png";
import Appointment from "../../../images/appointment-bg.png";
import { Typography } from "@mui/material";

const appointmentBg = {
  background: `url(${Appointment})`
}

const AppointmentBanner = () => {
  return ( 
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={doctor} style={{ width: 400 }} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">
          Appointment
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;

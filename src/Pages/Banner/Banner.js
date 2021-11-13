import React from "react";
import chair from "../../images/chair.png";
import bg from "../../images/bg.png";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  height: 600,
  alignItems: "center",
};

const Banner = () => {
  return (
    <Box  style={bannerBg} sx={{ mt: 2 }}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            style={{ ...verticalCenter, textAlign: "left" }}
            xs={12}
            md={6}
          >
            <Box>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 200 }}>
                Your New Smile
              </Typography>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 200 }}>
                Starts Here
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "gray", fontSize: 14, fontWeight: 400 }}
                sx={{ mb: 5 }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the.
              </Typography>
              <Button
                variant="contained"
                style={{ backgroundColor: "#19D3AE" }}
              >
                Get appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{ width: 500 }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const SingleService = (props) => {
  const { name, description, img } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, boxShadow: 0, }}>
        <CardContent>
          <CardMedia
            component="img"
            style={{width:'auto', height: '80px', margin: '0 auto' }}
            image={img}
            alt="Doctor Image"
          />
          <Typography sx={{ m: 3 }} gutterBottom>{name}</Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleService;

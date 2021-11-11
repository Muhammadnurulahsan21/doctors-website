import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import SingleService from "../SingleService/SingleService";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to person's teeth to improve of the risk of cavities.",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Cavity Filling, dental fillings, or simply fillings, are treatments a to restore the function, integrity, and morphology of missing tooth and replacement of such structure to a supported by dental implants.",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
    "Tooth whitening or tooth bleaching is the process of lightening the color of human teeth.and morphology of Whitening is often desirable when teeth become yellowed and intrinsic or extrinsic color of the tooth.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, m: 2, color: "info.main" }}
          variant="h6"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: "bold", m: 5, }} variant="h4" component="div">
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <SingleService key={service.name} service={service}></SingleService>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

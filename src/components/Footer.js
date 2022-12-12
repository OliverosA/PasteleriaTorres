import { Container, Grid } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <Container maxWidth='xl' sx={{ bgcolor: "#424242" }}>
      <Grid display={"flex"} justifyContent={"center"}>
        <Grid item xs={3}></Grid>
        <GitHub />
        hola
      </Grid>
    </Container>
  );
};

export default Footer;

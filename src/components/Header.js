import { Box, Container, Grid } from "@mui/material";
const Header = ({ logo }) => {
  return (
    <Container maxWidth='sm'>
      <Grid display={"flex"} justifyContent={"center"} mb={3}>
        <Box
          sx={{
            display: "flex",
            margin: "auto",
            height: "35vh",
          }}
        >
          {" "}
          <img src={logo} />
        </Box>
      </Grid>
    </Container>
  );
};

export default Header;

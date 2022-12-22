import { Box, Container, Grid, Grow } from "@mui/material";
const Header = ({ logo }) => {
  return (
    <Grow in={true} timeout={1000}>
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
            <img src={logo} className='logoImage' alt='cakeImage' />
          </Box>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Header;

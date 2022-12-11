import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import MyList from "./MyList";

const CakeCard = ({
  cakeId,
  cakeName,
  cakeImage,
  fillings,
  toppings,
  background,
}) => {
  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item key={cakeId}>
          <Card
            sx={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              py: "3%",
              my: "2%",
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                mb: "5%",
                mx: "center",
                textAlign: "left",
                px: "10%",
                bgcolor: "#FEF2F2",
                borderRadius: 5,
              }}
            >
              <Typography gutterBottom variant='h3'>
                {cakeName}
              </Typography>
            </Box>
            <CardMedia
              component='img'
              sx={{
                my: "auto",
                mx: "3%",
                width: "35%",
                height: "100%",
                borderRadius: 5,
                bgcolor: "red",
              }}
              image={cakeImage}
              alt={cakeName}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs>
                  <MyList list={fillings} headerList={"Rellenos"} />
                </Grid>
                <Grid item cs>
                  <MyList list={toppings} headerList={"Coberturas"} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CakeCard;

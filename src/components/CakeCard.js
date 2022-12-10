import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import "../App.css";
const CakeCard = ({ cakeId, cakeName, cakeImage, filling, background }) => {
  return (
    <>
      <Container maxWidth='sm' sx={{ py: 2, bgcolor: "red" }}>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={8} key={cakeId} bgcolor='green'>
            <Card
              sx={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component='img'
                sx={{
                  // 16:9
                  pt: "15%",
                }}
                image={cakeImage}
                alt={cakeName}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='h2'>
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CakeCard;

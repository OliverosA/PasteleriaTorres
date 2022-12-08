import { Box } from "@mui/material";
const Header = ({ logo }) => {
  return (
    <Box
      sx={{
        mt: 2,
        mx: 5,
        pt: 10,
        height: "20vh",
        bgcolor: "#FFDDDD",
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        borderRadius: 4,
      }}
    />
  );
};

export default Header;

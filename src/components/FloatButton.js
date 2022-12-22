import { Fab, Grow } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
const FloatButton = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const message = "¡Hola 🖐! quisiera cotizar en un pastel 🎂🍰🤩";
    window.open(
      `whatsapp://send?text=${message}&phone=+50258000982&abid=+50258000982`
    );
  };
  return (
    <>
      <Grow in timeout={1500}>
        <Fab
          color='success'
          sx={{
            display: "block",
            position: "fixed",
            right: 40,
            bottom: 40,
            width: 80,
            height: 80,
          }}
          aria-label='Cotizar un pastel'
          onClick={handleClick}
        >
          <WhatsApp sx={{ color: "white", fontSize: 50, margin: "auto" }} />
        </Fab>
      </Grow>
    </>
  );
};

export default FloatButton;

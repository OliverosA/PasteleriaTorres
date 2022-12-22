import { useEffect, useState } from "react";
import { Container, CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import CakeCard from "./components/CakeCard";
import MyImageList from "./components/MyImageList";
import FloatButton from "./components/FloatButton";

function App() {
  const [data, setData] = useState([]);

  const getCakesInfo = async () => {
    const response = await fetch("cakesinfo.json");
    const jsonData = await response.json();
    setData(jsonData.cakes);
  };

  useEffect(() => {
    getCakesInfo();
  }, []);

  return (
    <div className='hero-image'>
      <CssBaseline />
      <Header logo={"assets/logo.png"} />
      <Container maxWidth='md'>
        {data?.map((value) => (
          <CakeCard
            key={value.id}
            cakeId={value.id}
            cakeName={value.name}
            cakeImage={value.image}
            background={"assets/fondo.jpg"}
            fillings={value.fillings}
            toppings={value.toppings}
          />
        ))}
      </Container>
      <FloatButton />
      <MyImageList />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import CakeCard from "./components/CakeCard";
import MyImageList from "./components/MyImageList";
import Footer from "./components/Footer";

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
    <>
      <Header logo={"assets/logo.png"} />
      <Container maxWidth='md'>
        {data?.map((value, index) => (
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
      <MyImageList />
    </>
  );
}

export default App;

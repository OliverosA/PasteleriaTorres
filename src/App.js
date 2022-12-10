import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CakeCard from "./components/CakeCard";

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
      <Container maxWidth='sm' className='elementsContainer'>
        {data?.map((value) => (
          <CakeCard
            cakeId={value.id}
            cakeName={value.name}
            cakeImage={value.image}
            background={"assets/fondo.jpg"}
          />
        ))}
      </Container>
    </>
  );
}

export default App;

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
    <Container maxWidth='xl' className='hero-image'>
      <Container maxWidth='lg' className='elementsContainer'>
        <Header logo={"assets/logo.png"} />
        {data?.map((value) => (
          <CakeCard
            key={value.id}
            cakeName={value.name}
            cakeImage={value.image}
          ></CakeCard>
        ))}
      </Container>
    </Container>
  );
}

export default App;

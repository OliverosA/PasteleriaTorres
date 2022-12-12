import { useEffect, useState } from "react";
import { ImageList, ImageListItem } from "@mui/material";

const MyImageList = () => {
  const [data, setData] = useState([]);

  const getCakesImages = async () => {
    const response = await fetch("images.json");
    const jsonData = await response.json();
    setData(jsonData.images);
  };

  useEffect(() => {
    getCakesImages();
  }, [data]);

  return (
    <ImageList
      sx={{ mt: "10%", mx: "auto", width: "100%" }}
      variant='woven'
      cols={4}
      gap={8}
    >
      {data?.map((item) => (
        <ImageListItem key={item.id}>
          <img style={{ borderRadius: 15 }} src={item.src} alt={"cakeImage"} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default MyImageList;

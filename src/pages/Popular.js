import { Image } from "@mui/icons-material";
import { Divider, ImageListItem, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Popular = () => {
  const [popular, setPopular] = React.useState([]);
  const getPopular = async () => {
    await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data));
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
               <div class="grid sm:grid-cols-3 grid-rows-3 grid-cols-1 bg-blue-200">
      {popular.map((coin, index) => {
        return (
 
            <div
            key={index}
            className="shadow-md m-4 rounded-md hover:scale-105 duration-300 cursor-pointer bg-white"
          >
          <div className="flex flex-col items-center justify-evenly p-2 ">
          <Typography sx={{py:2}} variant="h5">{coin.name}</Typography>
            <ImageListItem sx={{width:1/2}}>
              <img src={coin.image} alt={coin.name} loading="lazy" />
            </ImageListItem>
            <div className="flex justify-between w-full px-4 py-2">
              <Typography variant="h6">{coin.symbol}</Typography>
              <Typography variant="h6">
                {coin.price_change_percentage_24h.toString().substring(0,6)}%
              </Typography>
            </div>
          </div>
            
          </div>
         
         
        );
      })}
      <Divider />
      </div>
    </>
  );
};
export default Popular;

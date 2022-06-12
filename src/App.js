//api to get a specific coin
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true

//api to get top 10 coins
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

//get all coins
//https://api.coingecko.com/api/v3/coins/list

//search
//https://api.coingecko.com/api/v3/search?query=bitcoin

//trending coins
//https://api.coingecko.com/api/v3/search/trending

import React from "react";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Trending from "./pages/Trending";
import AllCoins from "./pages/AllCoins";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Trending /> */}
      <AllCoins />
    </>
  );
}

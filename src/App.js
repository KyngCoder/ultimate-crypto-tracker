//api to get a specific coin
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true

//api to get top 10 coins
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false



//search
//https://api.coingecko.com/api/v3/search?query=bitcoin



import React from "react";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Trending from "./pages/Trending";
import AllCoins from "./pages/AllCoins";
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Trending />} exact />
        <Route path="/allcoins" element={<AllCoins />} exact/>
      </Routes>
     
    </BrowserRouter>
    
    </>
  );
}

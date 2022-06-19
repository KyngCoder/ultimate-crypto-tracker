//api to get a specific coin
//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true





//search
//https://api.coingecko.com/api/v3/search?query=bitcoin



import React from "react";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Trending from "./pages/Trending";
import AllCoins from "./pages/AllCoins";
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import Popular from "./pages/Popular";
import Search from "./pages/SearchComponent";
import {useContext} from "react";
import { SearchContext } from "./Helpers/Context";


export default function App() {
  const {search} = useContext(SearchContext)
  console.log(search)
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Popular />} exact />
        <Route path="/allcoins" element={<AllCoins />} exact/>
        <Route path="/trending" element={<Trending />} exact/>
        <Route path="/search" element={<Search />} exact />
        <Route path="*" element={<Popular />} />
      </Routes>
     
    </BrowserRouter>
    
    </>
  );
}

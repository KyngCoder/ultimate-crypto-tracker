import { AppBar, Divider, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import BasicTable from '../Helpers/Table';
import Paper from '@mui/material/Paper';
import { SearchContext } from '../Helpers/Context';

const Trending = () => {
  const {setSearch} = useContext(SearchContext)
    const [trendingList,setTrendingList] = React.useState([]);

    const fetchTrending = async () => {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingList(data.coins);
    }

    useEffect(() => {
      setSearch(false)
        fetchTrending();
    },[])

  return (
    <div className="flex justify-center m-4">
        <TableContainer component={Paper}  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-between', width:1/2}}>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Symbol</TableCell>
          </TableRow>
        </TableHead>
        {trendingList.map((coin,index) => {
        return (
           <BasicTable
            key={index}
            name={coin.item.name} 
            ID={coin.item.coin_id}
             Rank={coin.item.market_cap_rank}
             Symbol={coin.item.small} 

           />
    )})}
        </Table>
        </TableContainer>
    
   
    
    </div>
  )
}

export default Trending
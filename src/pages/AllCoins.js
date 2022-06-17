import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BasicTable from '../Helpers/Table'

import {
    slice, concat, 
  } from 'lodash';
  



const AllCoins = () => {

    const [showMore,setShowMore] = useState(true);
    const [coins,setCoins] = useState([]);
    const [position,setPosition] = useState(8);

    const getAllCoins = async () => {
        await fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(res => res.json())
        .then(data => setCoins(data))
    }

    useEffect(() => {
        getAllCoins();
    },[])

   


const loadMore = () =>{
  setPosition(prev => prev + 6)
  }
 


  return (
     
        <>
   <TableContainer component={Paper}  sx={{ display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Symbol</TableCell>
          </TableRow>
        </TableHead>
        {coins?.slice(0,position).map((coin,index) => {
        return (
          
            <TableBody  key={index}>
            <TableRow 
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell sx={{p:2, margin:0,}} component="th"  scope="row">
                {coin.name}
              </TableCell>
              <TableCell align="right">{coin.id}</TableCell>
              <TableCell align="right">{coin.symbol}</TableCell>
            </TableRow>
        </TableBody>
        
          
          
    )})}
        </Table>
        </TableContainer>
        <div className="flex justify-center m-4">
        {showMore && <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-black" onClick={loadMore}> Load More </button>}
        </div>
       
        </>
        
  )
}

export default AllCoins
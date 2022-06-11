import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';





export default function BasicTable({name,ID,Rank,Symbol}) {
  return (


       
        <TableBody>
            <TableRow
              key={1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell sx={{p:2, margin:0, width:40}} component="th"  scope="row">
                {name}
              </TableCell>
              <TableCell align="right">{ID}</TableCell>
              <TableCell align="right">{Rank}</TableCell>
              <TableCell sx={{display:'flex', justifyContent:'flex-end', m:2}}><Avatar alt={name} src={Symbol} /></TableCell>
            </TableRow>
        </TableBody>
  );
}

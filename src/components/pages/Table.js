import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {shadows , palette} from '@mui/system'

import './table.css'

function createData(
  name: string,
  time: string,
  price:number,
) {
  return { name, time , price };
}

const rows = [
  createData('Auschwitz', '2h' , 200),
  createData('Zakopane', '2h' , 200),
  createData('Energylandia', '2h' , 200),
  createData('Cracow', '2h' , 200),
  createData('Cracow', '2h' , 200),
  createData('Cracow', '2h' , 200),
  createData('Cracow', '2h' , 200),

  
];


export default function BasicTable() {
  return (
    <TableContainer component={Paper}><h1>Info about trip prices</h1>
      <Table sx={{ minWidth: 650 , boxShadow: 3 , bgcolor: 'primary.main'} } aria-label="simple table" size='small'>
        <TableHead>
          <TableRow>
            <TableCell><h1>Destination</h1></TableCell>
            <TableCell><h1>Time</h1></TableCell>
            <TableCell><h1>Price for 1 person</h1></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } } }
            >
              <TableCell component="th" scope="row"> {row.name}</TableCell>
              <TableCell component="th" scope="row">{row.time} </TableCell>
              <TableCell component="th" scope="row"> {row.price}</TableCell>
    
            </TableRow>

            
          ))}

        </TableBody>
      </Table>



   




    </TableContainer>

    
  );
}
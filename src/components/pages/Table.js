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
  name,
  time,
  price,
) {
  return { name, time , price };
}

const rows = [
  createData('Auschwitz', '2h' , 200),
  createData('Zakopane', '2h' , 200),
  createData('Energylandia', '2h' , 200),
  createData('Cracow', '2h' , 200),
 

  
];



export default function BasicTable() {
  return (
    <TableContainer sx={{color:'white'}}  component={Paper}><h1>Info about trip prices</h1>
      <Table sx={{ minWidth: 650 , bgcolor: '#003380' , fontSize:40} } aria-label="simple table" size='small'>
        <TableHead sx={{innerHeight:100}}>
          <TableRow sx={ {height:100}}>
            <TableCell  sx={{fontSize:30 , color:'white'}}><h1>Destination</h1></TableCell>
            <TableCell  sx={{fontSize:30 , color:'white'}}><h1>Time</h1></TableCell>
            <TableCell  sx={{fontSize:30 , color:'white'}}><h1>Price for 1 person</h1></TableCell>
           
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow sx={ {height:100}}>
            <TableCell sx={{fontSize:50 , color:'white' , fontWeight:600}}>Single Trip</TableCell>
           
          </TableRow>
        </TableHead>
         

        <TableBody>
          {rows.map((row) => (
            <TableRow  className='table-cell'
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }  } }
            >
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}> {row.name}</TableCell>
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}>{row.time} </TableCell>
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}> {row.price}</TableCell>
    
            </TableRow>

            
          ))}

          <TableHead>
          <TableRow sx={ {height:100}}>
            <TableCell sx={{fontSize:50 , color:'white' , fontWeight:600}}>Group Trip</TableCell>
           
          </TableRow>
        </TableHead>

          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }  } }
            >
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}> {row.name}</TableCell>
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}>{row.time} </TableCell>
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}> {row.price}</TableCell>
    
            </TableRow>

            
          ))}

          <TableHead>
                    <TableRow sx={ {height:100}}>

                      <TableCell sx={{fontSize:50 , color:'white' , fontWeight:600}}>Shared Group MultiTrip</TableCell>
                    
                    </TableRow>
          </TableHead>


            {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }  } }
            >
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}> {row.name}</TableCell>
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}>{row.time} </TableCell>
              <TableCell component="th" scope="row" sx={{fontSize:30 , color:'beige'}}> {row.price}</TableCell>
    
            </TableRow>

            
          ))}


        </TableBody>
      </Table>



   




    </TableContainer>

    
  );
}
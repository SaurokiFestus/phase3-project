import { TablePagination, Box, Button } from '@mui/material';
import React from 'react'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LocationsList = ({totalLocations, deleteLocations}) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

   
      
    const handleChangePage = (e, newPage ) => {
        setPage(newPage);
    };
      
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
          },
      }));
  
      const darkTheme = createTheme({
          palette: {
            mode: 'dark',
          },
      })
  
    return (
      <ThemeProvider theme={darkTheme}>
      <Paper sx={{ width: '100%', overflow: 'scroll' }}>
        <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell align="center">Street Id</StyledTableCell>
              <StyledTableCell align="center">Street Name</StyledTableCell>
              <StyledTableCell align="center">Street Address</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {totalLocations
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((location) => (
                <TableRow 
            key={location.id}
            >
              <StyledTableCell align="center">{location.id}</StyledTableCell>
              
              <StyledTableCell align="center">{location.street_name}</StyledTableCell>
              <StyledTableCell align="center">{location.street_address}</StyledTableCell>
              
              {/* <StyledTableCell align="right"> */}
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button 
                variant="contained" 
                color="primary"
                onClick={() => {
                  deleteLocations(location.id);
                }}
                >
                  Delete
                </Button>
              </Box>
              {/* </StyledTableCell> */}
            </TableRow>
            ))}
            </TableBody>
            </Table>
            </TableContainer>
          <TablePagination
            
            // component="div"
            count={totalLocations.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        </ThemeProvider>
      )
    }
    
    export default LocationsList
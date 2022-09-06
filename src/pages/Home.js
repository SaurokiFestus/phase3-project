import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Container, CssBaseline, Box} from '@mui/material';
import {useEffect, useState, useContext} from "react"
import { ClassNames } from '@emotion/react';
import Book from './Book';


function Home() {

  
  return (
    <>
    <CssBaseline />
      <Container sx={{height: "40vh", display: "flex", bgcolor: '#cfe8fc'}}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '1000vh' }} /> */}
      {/* <Book/> */}
    
    </Container>
    
    </>
  );
}

export default Home
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Container, CssBaseline, Box} from '@mui/material';
import {useEffect, useState, useContext} from "react"
import { ClassNames } from '@emotion/react';
import Book from './Cards';



function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:9292/locations")
    .then((res) => res.json())
    .then(data => setUsers(data))
    console.log(setUsers)
  },[])

  
  return (
    <>
    <CssBaseline />
      <Container sx={{height: "40vh", display: "flex", bgcolor: '#cfe8fc'}}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '1000vh' }} /> */}
      {/* <Book/> */}
    
    </Container>
      {users.map((user) =>(
        <Book street_name = {user.street_name}  street_address = {user.street_address} />
      ))}
    </>
  );
}

export default Home
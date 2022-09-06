import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useEffect, useState, useContext} from "react"
import { ClassNames } from '@emotion/react';


function Home({name, username, email}) {

  
  return (
    <>
    
    <Card sx={{ 
      maxWidth: 345,
      marginBottom: 5,
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://image.shutterstock.com/image-photo/billboard-canvas-mockup-city-background-600w-539175535.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name:{name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Location: {username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}

export default Home
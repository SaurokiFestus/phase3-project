import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Container, CssBaseline, Box} from '@mui/material';
import {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import { ClassNames } from '@emotion/react';

function Cards({street_name, street_address}) {

  let navigate = useNavigate()

  return (
    <div>
        <Card sx={{ 
          maxWidth: 345,
          marginBottom: 5,
          padding: 2,
          display: "grid"
      }}
      onClick={()=>{navigate("/booknow")}}
      >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://image.shutterstock.com/image-photo/billboard-canvas-mockup-city-background-600w-539175535.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Street Name:{street_name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Street Address: {street_address}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Description: {email}
          </Typography> */}

        </CardContent>
      </CardActionArea>
      <Button 
          variant="outlined"
          onClick={() => {navigate("/booknow")}}
      >
        Book now
        </Button>
    </Card>
    </div>
  )
}

export default Cards
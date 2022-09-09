import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container} from '@mui/material';
import LocationsList from './LocationsList';
import Locations from './Locations';
import {useEffect, useState, useContext} from "react"

export default function Form() {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [duration, setDuration] = useState("")

  const handleSubmit = (e) => {
     e.preventDefault()
     const form = {name, number, search, location, duration}
    //  console.log(form)

    fetch('http://127.0.0.1:9292/adverts', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(form)
    }).then (() => {
      alert('New Advert Added')
    })
  }


  return (
    <>
    <Container>
      <Box>
    <form onSubmit={handleSubmit}>

    
  
  
    
      
       
        <TextField
          id="outlined-helperText"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value) }
          required
          
        />
        {/* <TextField
          id="outlined-number"
          label="Phone Number"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value) }
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        <TextField 
          id="outlined-search" 
          label="Price range" 
          type="filter" 
          value={search}
          onChange={(e) => setSearch(e.target.value) }
          />
        <TextField
          id="outlined-helperText"
          label="Location"
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value) }
        />
         <TextField
          id="outlined-helperText"
          label="Duration"
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value) }
          
        />
       */}
    
      <Button 
      type='submit'
      variant="outlined"
      >
        Book now
        </Button>
  
    </form>
    </Box>
    </Container>
    
    
    <p>{name}</p>
    
  
   
    </>
  );
}

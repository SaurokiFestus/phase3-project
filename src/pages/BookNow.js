import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container} from '@mui/material';
import LocationsList from './LocationsList';
import Locations from './Locations';

export default function FormPropsTextFields() {
  return (
    <>
    
    <Container sx={{height: "40vh", display: "flex", bgcolor: '#cfe8fc', width: "800px", borderRadius: "8px"}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        
        <TextField
          id="outlined-helperText"
          label="Name"
          type="text"
          
        />
        <TextField
          id="outlined-number"
          label="Phone Number"
          type="text"
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        <TextField 
          id="outlined-search" 
          label="Price range" 
          type="search" />
        <TextField
          id="outlined-helperText"
          label="Location"
        />
         <TextField
          id="outlined-helperText"
          label="Duration"
          type="text"
          
        />
      
      </div>
      <Button 
          variant="outlined"
      >
        Book now
        </Button>
    </Box>
    </Container>
    {/* <Locations/> */}
    </>
  );
}

import React from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Login() {
  return (
    <>
    
    <Box
        component="form"
        sx={{
        width: 300,
        height: 200,
        alignItems: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
    >
    
    <TextField id="standard-basic" label="Username" variant="standard" />
    <TextField id="standard-basic" label="Password" variant="standard" />
    

    <Button
        variant="outlined"
    >
        Login
    </Button>
    </Box>
    </>
    
  )
}

export default Login
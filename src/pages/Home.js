import React from 'react'
import { Typography, Button } from '@mui/material'

function Home() {
  return (
    <div>
        <Typography 
        variant='h6'
        color="textSecondary"
        component="h2"
        gutterBottom
        >
            Homepage
        </Typography>
        <Button
        variant="primary"
        >
            Primary
        </Button>

    </div>
  )
}

export default Home
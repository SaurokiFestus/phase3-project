import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Book from './Cards';
import {Link} from "react-router-dom";
// import MenuIcon from '@mui/icons-material/MenuIcon';
// import HomeIcon from "mui/material/HomeIcon"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          {/* <Link to="/login"> */}
          {/* <Button color="inherit">Login</Button>
          </Link>
          
          <Button color="inherit">Logout</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

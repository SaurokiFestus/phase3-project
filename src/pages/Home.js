import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Container, CssBaseline, Box} from '@mui/material';
import {useEffect, useState, useContext} from "react"
import { ClassNames } from '@emotion/react';
import Cards from './Cards';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';





function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:9292/locations")
    .then((res) => res.json())
    .then(data => setUsers(data))
    console.log(setUsers)
  },[])

  
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Tab One" value="1" />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          WANT TO KNOW WHAT EVERYONE IN THE BILLBOARD WORLD IS TALKING ABOUT...
        </TabPanel>
        <TabPanel value="2">GET IN ON THE KNOW ON BILLAD</TabPanel>
        <TabPanel value="3">BOOK WITH US NOW</TabPanel>
      </TabContext>

      <div className='cards'>
      {users.map((user) =>(
        <Cards street_name = {user.street_name}  street_address = {user.street_address} />
      ))}
      </div>
      
    </>
  );
}

export default Home
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

  const handleChange = (event, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
    <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <img src='https://cdn.dribbble.com/users/13897/screenshots/17667646/media/e04b41dc9c80160ded28482e9041cf54.jpg' alt='' width="fit" height="400px"/>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
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
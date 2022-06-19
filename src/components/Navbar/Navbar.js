import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <MenuIcon sx={{ mr: 2 }} />
          <ArrowBackIosIcon sx={{ ml: 25 }} />
          <ArrowForwardIosIcon sx={{ mr: 2 }} />
          <h3 className='navbar-month-year'>June 2022</h3>
        </Toolbar>
      </AppBar>
    </div>
  )
}

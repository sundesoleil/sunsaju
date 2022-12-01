import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import logo from '../assets/images/logo.svg';
import styled from '@emotion/styled';

const LogoText = styled.div`
  font-family: MonoplexKR-Regular;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: #ffffff;
`;

function Nav() {
  return (
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none', borderBottom: '1px solid #2f333d' }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <img src={logo} width="32" height="32" alt="logo" />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <LogoText>순 사 주 S O O N S A J U</LogoText>
            </Typography>
            <Button style={{ color: '#000000' }}></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </NavLink>
  );
}

export default Nav;

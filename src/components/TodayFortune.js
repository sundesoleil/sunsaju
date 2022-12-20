import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Mars from '../assets/images/mars.jpg';
import Planet from '../assets/images/planet.jpg';
import Galaxy from '../assets/images/galaxy.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#ffffff',
  height: '150px',
}));

function FormRow() {
  let fortunes = [
    { id: 1, name: 'money', title: '오늘의 재물운', poster: Mars },
    { id: 2, name: 'work', title: '오늘의 직업운', poster: Planet },
    { id: 3, name: 'study', title: '오늘의 학업운', poster: Planet },
    { id: 4, name: 'love', title: '오늘의 애정운', poster: Galaxy },
  ];

  return (
    <React.Fragment>
      {fortunes.map((fortune) => (
        <Grid key={fortune.id} item xs={3} style={{ cursor: 'pointer' }}>
          <NavLink to={`/today/${fortune.name}`}>
            <Item name={fortune.name} style={{ position: 'relative', backgroundImage: `url(${fortune.poster})`, backgroundSize: 'auto 100%' }}>
              <h3
                style={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                  left: '50%',
                  opacity: '80%',
                  wordBreak: 'keep-all',
                }}
              >
                {fortune.title}
              </h3>
            </Item>
          </NavLink>
        </Grid>
      ))}
    </React.Fragment>
  );
}

export default function TodayFortune() {
  return (
    <Box sx={{ flexGrow: 1, m: 2, p: 2 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

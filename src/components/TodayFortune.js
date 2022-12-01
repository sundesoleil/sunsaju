import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  let fortunes = [
    { id: 1, name: 'money', poster: null },
    { id: 2, name: 'work', poster: null },
    { id: 3, name: 'love', poster: null },
  ];

  return (
    <React.Fragment>
      {fortunes.map((fortune) => (
        <Grid item xs={4}>
          <Item key={fortune.id} name={fortune.name}>
            <img alt="random_fortune_img" src={fortune.poster} />
            여기는 아무말
          </Item>
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import MainButton from './MainButton';

const MenuTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  border-radius: 4px;
  padding: 20px 10px 10px;
  margin-top: 20px;
  text-align: left;
  &:hover {
  }
`;

const MenuSubTitle = styled.div`
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
`;

const theme = createTheme();

function PersonalInfoInputForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const clickHandler = () => {
    setFetching(true);
    save(() => {
      setFetching(false);
      goResult();
    });
  };

  const save = (callback) => {
    setTimeout(callback, 1000);
  };

  const goResult = () => {
    navigate('/result', {
      state: {
        info: info,
      },
    });
  };

  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false);

  const [info, setInfo] = useState({
    name: '',
    sex: 'female',
    year: '',
    month: '',
    day: '',
    time: '',
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <MenuTitle className="title text-primary">
          타고난 나의 사주
          <MenuSubTitle color="textSecondary">
            사주는 블라블라블라,,
            <br />
            당신의 운명을 어쩌고,,
            <br />
            어디어디에 근거한 뭐뭐다,,
          </MenuSubTitle>
        </MenuTitle>
        <Box
          sx={{
            padding: '15px',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#f9f9f9',
            borderRadius: '20px',
            border: '1px solid #efefef',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <div align="left" mb={2} style={{ marginBottom: '10px', fontWeight: 'bold' }}>
              개인정보입력 <br />
              정확한 사주 분석을 위해 실제 생일정보를 입력하여 주시게,,
              <br />
              해당 정보는 절대 저장되지 않소이다,,
            </div>
            <Grid container spacing={2} mb={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={info.name}
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  autoFocus
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl align="left" fullWidth>
                  <InputLabel id="select-sex">성별</InputLabel>
                  <Select labelId="select-sex-label" id="select-sex" name="sex" value={info.sex} label="Age" onChange={changeHandler}>
                    <MenuItem value={'female'}>여성</MenuItem>
                    <MenuItem value={'male'}>남성</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl align="left" fullWidth>
                  <InputLabel id="select-year">연도</InputLabel>
                  <Select labelId="select-year-label" id="select-year" name="year" value={info.year} label="연도" onChange={changeHandler}>
                    <MenuItem value={2022}>2022</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl align="left" fullWidth>
                  <InputLabel id="select-month">월</InputLabel>
                  <Select labelId="select-month-label" id="select-month" name="month" value={info.month} label="월" onChange={changeHandler}>
                    <MenuItem value={1}>1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl align="left" fullWidth>
                  <InputLabel id="select-day">일</InputLabel>
                  <Select labelId="select-day-label" id="select-day" name="day" value={info.day} label="일" onChange={changeHandler}>
                    <MenuItem value={1}>1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl align="left" fullWidth>
                  <InputLabel id="select-time">시간</InputLabel>
                  <Select labelId="select-time-label" id="select-time" name="time" value={info.time} label="시간" onChange={changeHandler}>
                    <MenuItem value={'00:00 ~ 02:00'}>00:00 ~ 02:00</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <MainButton
            onClick={(e) => {
              clickHandler(info, e);
            }}
            disabled={fetching}
          >
            {fetching ? '타고난 사주 분석 중...' : '타고난 사주 보기'}
          </MainButton>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PersonalInfoInputForm;

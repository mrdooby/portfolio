import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { text } from '../data/AboutData.js';
import Grid from '@mui/material/Grid';


const AboutKenji = () => {
  return (
    <AboutContainer>
      <Grid container spacing={3} position='relative'
      marginBottom='auto' height={{md: '100%'}}
      border='solid blue'
      >
        <Grid item md={6} padding='20px'>
          <AboutText>Kenji</AboutText>
        </Grid>
        <Grid item md={6} position='relative' padding='20px'>
          <AboutPhoto></AboutPhoto>
        </Grid>
    </Grid>
    </AboutContainer>
  )
}

export default AboutKenji;

// styled components

const AboutContainer = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  border: solid gray;
  flex-direction: column;
  position: relative;
`;

const AboutTitle = styled.div`
  display: flex;
  border: solid pink;
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 0;
  color: #fffcf2;
`;

const PersonIcon = styled.span`
  display: flex;
  margin-left: auto;
`

const KenjiIcon = styled.span`
  display: flex;
  margin-left: auto;
`;

const YuffieIcon = styled.span`
  display: flex;
  margin-left: auto;
`;

const AboutText = styled.div`
  display: flex;
  border: solid green;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  font-size: 1vw;
  white-space: break-spaces;
`;

const AboutPhoto = styled.div`
  display: flex;
  border: solid yellow;
  background-image: url(https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/01/931/523/Dwayne-Rock-Johnson-GETTY-1.jpg?ve=1&tl=1);
  height: 100%;
`;

// #fffcf2 floral white,
//    pop out, headers and titles
// #ccc5b9 pale silver,
//    normal text
// #403d39 black olive,
//    box around text
// #252422 eerie black,
//    background
// #eb5e28 flame
//    hightlight around buttons
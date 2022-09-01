import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { text } from '../data/AboutData.js';
import Grid from '@mui/material/Grid';
import Yuffie from '../media/yuffie.PNG';
import { YuffieText } from '../data/AboutData.js';

const AboutYuffie = () => {
  return (
    <AboutContainer>
      <Grid container spacing={0} position='relative'
      marginTop='auto' height={{md: '100%'}}
      >
        <Grid item md={6}>
          <AboutText>{YuffieText}</AboutText>
        </Grid>
        <Grid item md={6} position='relative'>
          <AboutPhoto img={Yuffie}></AboutPhoto>
        </Grid>
    </Grid>
    </AboutContainer>
  )
}

export default AboutYuffie;

// styled components

const AboutContainer = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const AboutText = styled.div`
  display: flex;
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
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 35%;
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
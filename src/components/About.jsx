import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { text } from '../data/AboutData.js';
import Grid from '@mui/material/Grid';


const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>
        about me title
        <PersonIcon>me</PersonIcon>
        <KenjiIcon>kenji</KenjiIcon>
        <YuffieIcon>yuffie</YuffieIcon>
      </AboutTitle>
      <Grid container spacing={3} position='relative'
      marginBottom='auto' height={{md: '100%'}}
      border='solid blue'
      >
        <Grid item md={6} padding='20px'>
          <AboutText>{text}</AboutText>
        </Grid>
        <Grid item md={6} position='relative' padding='20px'>
          <AboutPhoto>hi</AboutPhoto>
        </Grid>
    </Grid>
    </AboutContainer>
  )
}

export default About;

// styled components

const AboutContainer = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  border: solid gray;
  flex-direction: column;
`;

const AboutTitle = styled.div`
  display: flex;
  border: solid pink;
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 0;
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
`;

const AboutPhoto = styled.div`
  display: flex;
  border: solid yellow;
  background-image: url('https://i.kym-cdn.com/photos/images/newsfeed/001/464/818/f2a.jpg');
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
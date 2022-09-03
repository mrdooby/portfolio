import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import Grid from '@mui/material/Grid';

import { KenjiText } from '../data/AboutData.js';
import KenjiImg from '../media/kenji.PNG';

const AboutKenji = () => {
  return (
    <AboutMeContainer>
      <Grid container  boxShadow='0 0 5px #858071' borderRadius='5px' height='60vh' width={`calc(100% - 4vw)`} backgroundColor= '#ccc5b9'>
        <Grid item md={4}>
          <Text>Kenji Chin</Text>
        </Grid>
        <Grid item md={4}>
          <Photo image={KenjiImg}/>
        </Grid>
        <Grid item md={4}>
          <AboutText>{KenjiText}</AboutText>
        </Grid>
      </Grid>
    </AboutMeContainer>
  )
}

export default AboutKenji;

// styled components
const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 3;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: max(20px, 2vw);
  font-weight: bold;
  flex-direction: column;
`;

const Photo = styled.div`
  display: flex;
  margin: 10px;
  height: calc(100% - 20px);
  align-self: center;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const AboutText = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  height: calc(100% - 20px);
  white-space: break-spaces;
  justify-content: center;
  font-weight: bold;
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
//    hightlight around buttons s

import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { text } from '../data/AboutData.js';
import Grid from '@mui/material/Grid';
import AboutMe from './AboutMe.jsx';
import AboutKenji from './AboutKenji.jsx';
import AboutYuffie from './AboutYuffie.jsx';
import IconKenji from '../media/kenjiIcon.PNG';
import IconYuffie from '../media/yuffieIcon.PNG';

const About = () => {
  const [view, setView] = useState('Me');

  const renderView = () => {
    switch (view) {
      case 'Me':
        return <AboutMe/>;
      case 'Kenji':
        return <AboutKenji/>;
      case 'Yuffie':
        return <AboutYuffie/>;
      default:
        return null;
    }
  }

  return (
    <AboutContainer>
      <AboutTitle>
        about
        <PersonIcon onClick={(e) => {setView('Me')}}>👓</PersonIcon>
        <KenjiIcon onClick={(e) => {setView('Kenji')}} src={IconKenji}></KenjiIcon>
        <YuffieIcon onClick={(e) => {setView('Yuffie')}} src={IconYuffie}></YuffieIcon>
      </AboutTitle>
      <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
    </AboutContainer>
  )
}

export default About;

// styled components

const AboutContainer = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const AboutTitle = styled.div`
  display: flex;
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: auto;
  color: #fffcf2;
  position: relative;
  border-top: solid #fffcf2;
  border-bottom: solid #fffcf2;
`;

const PersonIcon = styled.span`
  display: flex;
  margin-left: auto;
  :hover {
    cursor: pointer;
    transform: translateY(-0.1em);
  }
`

const KenjiIcon = styled.img`
  display: flex;
  height: 6vw;
  width: auto;
  align-self: center;
  :hover {
    cursor: pointer;
    transform: translateY(-0.1em);
  }
`;

const YuffieIcon = styled.img`
  display: flex;
  height: 6vw;
  width: auto;
  align-self: center;
  :hover {
    cursor: pointer;
    transform: translateY(-0.1em);
  }
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
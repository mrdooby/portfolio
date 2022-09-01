import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import { text } from '../data/AboutData.js';
import Grid from '@mui/material/Grid';
import AboutMe from './AboutMe.jsx';
import AboutKenji from './AboutMe.jsx';
import AboutYuffie from './AboutMe.jsx';

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
        about me title
        <PersonIcon onClick={(e) => {setView('Me')}}>me</PersonIcon>
        <KenjiIcon onClick={(e) => {setView('Kenji')}}>kenji</KenjiIcon>
        <YuffieIcon onClick={(e) => {setView('Yuffie')}}>yuffie</YuffieIcon>
      </AboutTitle>
      <main>
        <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
      </main>
    </AboutContainer>
  )
}

export default About;

// styled components

const AboutContainer = styled.section`
  display: flex;
  height: 100vh;
  border: solid gray;
  flex-direction: column;
`;

const AboutTitle = styled.div`
  display: flex;
  border: solid pink;
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 0;
  color: #fffcf2;
  position: relative;
`;

const PersonIcon = styled.span`
  display: flex;
  margin-left: auto;
  :hover {
    cursor: pointer;
  }
`

const KenjiIcon = styled.span`
  display: flex;
  :hover {
    cursor: pointer;
  }
`;

const YuffieIcon = styled.span`
  display: flex;
  :hover {
    cursor: pointer;
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
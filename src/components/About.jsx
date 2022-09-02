import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe.jsx';
import AboutKenji from './AboutKenji.jsx';
import AboutYuffie from './AboutYuffie.jsx';

const About = () => {
  const [view, setView] = useState('Kenji');

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
      <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
    </AboutContainer>
  )
}

export default About;

// styled components
const AboutContainer = styled.section`
  display: flex;
`;

const NameBox = styled.div`
  display: flex;
  height:
`;
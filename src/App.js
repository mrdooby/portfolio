import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import ColorScheme from './components/ColorScheme.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <AppContainer>
      <Header/>
      <ColorScheme/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </AppContainer>
  )
};

export default App;

// styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
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
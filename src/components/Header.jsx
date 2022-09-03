import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Resume from '../media/ClaytonGChin_Resume.pdf';

const Header = () => {
  const about = document.getElementById('about');
  const home = document.getElementById('home');

  const aboutScroll = async () => {
    try {
      let about = document.getElementById('about');
      about.scrollIntoView({alignToTop: true, behavior: 'smooth'});

    } catch (err) {
      console.log('err in projects scroll');
    }
  }

  const homeScroll = async () => {
    try {
      let home = document.getElementById('home');
      home.scrollIntoView({alignToTop: true, behavior: 'smooth'});

    } catch (err) {
      console.log('err in projects scroll');
    }
  }

  const projectsScroll = async () => {
    try {
      let projects = document.getElementById('projects');
      projects.scrollIntoView({alignToTop: true, behavior: 'smooth'});

    } catch (err) {
      console.log('err in projects scroll');
    }
  }

  return (
    <HeaderContainer>
      <NameTab>clayton chin</NameTab>
      <HeaderTab onClick={homeScroll}>home</HeaderTab>
      <HeaderTab onClick={aboutScroll}>about</HeaderTab>
      <HeaderTab onClick={projectsScroll}>projects</HeaderTab>
      <HeaderTab onClick={(e) => {window.open(Resume)}}>resume</HeaderTab>
    </HeaderContainer>
  )
}

export default Header;

// styled components
const HeaderContainer = styled.section`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: flex-end;
  background-color: #fffcf2;
  z-index: 10;
  box-shadow: 0 0 3px black;
`;

const HeaderTab = styled.div`
  margin-right: 20px;
  color: #252422;
  :hover {
    color: #eb5e28;
    cursor: pointer
  }
`;

const NameTab = styled.div`
  color: #252422;
  margin-right: auto;
  margin-left: 20px;
`

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
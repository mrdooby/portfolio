import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Header = () => {
  const projects = document.getElementById('projects');
  const about = document.getElementById('about');
  const home = document.getElementById('home');

  return (
    <HeaderContainer>
      <NameTab>clayton chin</NameTab>
      <HeaderTab onClick={(e) => {home.scrollIntoView({alignToTop: true, behavior: 'smooth'})}}>home</HeaderTab>
      <HeaderTab onClick={(e) => {about.scrollIntoView({alignToTop: true, behavior: 'smooth'})}}>about</HeaderTab>
      <HeaderTab onClick={(e) => {projects.scrollIntoView({alignToTop: true, behavior: 'smooth'})}}>projects</HeaderTab>
      <HeaderTab>resume</HeaderTab>
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
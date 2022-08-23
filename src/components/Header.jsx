import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTab>home</HeaderTab>
      <HeaderTab>about</HeaderTab>
      <HeaderTab>projects</HeaderTab>
      <HeaderTab>contact</HeaderTab>
      <HeaderTab>resume</HeaderTab>
    </HeaderContainer>
  )
}

export default Header;

// styled components
const HeaderContainer = styled.section`
  display: flex;
  position: sticky;
  width: 100%;
  justify-content: flex-end;
`;

const HeaderTab = styled.div`
  margin-right: 20px;
  :hover {
    color: #eb5e28;
    cursor: pointer
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
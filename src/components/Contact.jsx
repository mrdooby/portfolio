import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
    </ContactContainer>
  )
}

export default Contact;

// styled components
const ContactContainer = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const ContactTitle = styled.div`
  display: flex;
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: auto;
  color: #fffcf2;
  position: relative;
  border-top: solid #fffcf2;
  border-bottom: solid #fffcf2;
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
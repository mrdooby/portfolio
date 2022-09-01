import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer>
      <ContactBox>
        <ContactTitle>Contact me</ContactTitle>
        <ContactBody>reach me at ____</ContactBody>
        <ContactButton>say hello</ContactButton>
        <ContactText>email copied to clipboard</ContactText>
      </ContactBox>
    </ContactContainer>
  )
}

export default Contact;

// styled components
const ContactContainer = styled.section`
  display: flex;
  height: 100vh;
  border: solid gray;
  flex-direction: column;
  justify-content: center;
`;

const ContactBox = styled.div`
  width: 70%;
  border: solid white;
  align-self: center;
  text-align: center;
`;

const ContactTitle = styled.div`
  font-size: 100px;
  padding-left: 1%;
  font-weight: bold;
  color: #fffcf2;
`;

const ContactBody = styled.div`
  color: #ccc5b9;
`;

const ContactButton = styled.button`
`;

const ContactText = styled.div`
  color: #ccc5b9;
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
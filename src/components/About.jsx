import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import Typed from 'react-typed';

const About = () => {
  return (
    <AboutContainer>
      <AboutBox>
        <AboutTitleBox>
          <AboutTitle>about me&nbsp;</AboutTitle>
            <AboutAnimatedName
              strings={['dog lover', 'bowler', 'gym rat', 'foodie', 'clayton chin']}
              typeSpeed={50}
              backSpeed={50}
            />
        </AboutTitleBox>
        <AboutDescriptionBox>
          <AboutDescriptionInfoBox>
            <AboutDescriptionInfo>about me information</AboutDescriptionInfo>
          </AboutDescriptionInfoBox>
          <AboutDescriptionImgBox>
            <AboutDescriptionImg/>
          </AboutDescriptionImgBox>
        </AboutDescriptionBox>
      </AboutBox>
    </AboutContainer>
  )
}

export default About;

// styled components

const AboutContainer = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  border: solid white;
`;

const AboutTitleBox = styled.div`
  display: flex;
  border: solid blue;
`;

const AboutTitle = styled.div`
  font-size: 100px;
  padding-left: 1%;
  font-weight: bold;
  color: #fffcf2;
`;

const AboutAnimatedName = styled(Typed)`
  font-size: 100px;
  padding-right: 1%;
  font-weight: bold;
  color: #fffcf2;
`;

const AboutDescriptionBox = styled.div`
  display: flex;
  border: solid green;
  height: 100%;
`;

const AboutDescriptionInfoBox = styled.div`
  border: solid red;
`;

const AboutDescriptionInfo = styled.div`
  color: #ccc5b9;
`;

const AboutDescriptionImgBox = styled.div`
  border: solid pink;
  margin-left: auto;
`;

const AboutDescriptionImg = styled.img`
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
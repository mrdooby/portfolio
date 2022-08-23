import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <AboutBox>
        <AboutTitleBox>
          <AboutTitle>about me</AboutTitle>
          <AboutAnimatedName>clayton chin</AboutAnimatedName>
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
`;

const AboutAnimatedName = styled.div`
  font-size: 100px;
  padding-right: 1%;
  margin-left: auto;
  font-weight: bold;
`;

const AboutDescriptionBox = styled.div`
  display: flex;
  border: solid green;
  padding: 10%;
`;

const AboutDescriptionInfoBox = styled.div`
  border: solid red;
`;

const AboutDescriptionInfo = styled.div`
`;

const AboutDescriptionImgBox = styled.div`
  border: solid pink;
  margin-left: auto;
`;

const AboutDescriptionImg = styled.img`
`;
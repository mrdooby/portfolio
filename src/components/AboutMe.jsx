import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { text } from '../data/AboutData.js';
import ClaytonImg from '../media/clayton.PNG';

const AboutMe = () => {

  const [click, setClick] = useState(false)

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('claytonchin.dev@gmail.com');
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 2000)
  }

  return (
    <AboutMeContainer>
      <Grid container border='solid #403d39 1px' height='60vh' width={`calc(100% - 4vw)`} backgroundColor= '#ccc5b9'>
        <Grid item md={4}>
          <Text>
            Clayton Chin
            <Icons>
              <Email sx={{ fontSize: '3vw', padding: '10px' }} onClick={handleEmailClick}/>
              <GitHub sx={{ fontSize: '3vw', padding: '10px' }} onClick={(e) => window.open('https://github.com/mrdooby')}/>
              <LinkedIn sx={{ fontSize: '3vw', padding: '10px' }} onClick={(e) => window.open('https://www.linkedin.com/in/chinclayton/')}/>
            </Icons>
            {click ? <div>
              <EmailText>My email has been copied to your clipboard !</EmailText>
            </div> :
            <div>
              <EmailTextFalse>My email has been copied to your clipboard !</EmailTextFalse>
            </div>}
          </Text>
        </Grid>
        <Grid item md={4}>
          <Photo image={ClaytonImg}/>
        </Grid>
        <Grid item md={4}>
          <AboutText>{text}</AboutText>
        </Grid>
      </Grid>
    </AboutMeContainer>
  )
}

export default AboutMe;

// styled components
const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: max(20px, 2vw);
  font-weight: bold;
  flex-direction: column;
`;

const Email = styled(EmailIcon)`
  :hover {
    color: #eb5e28;
    transition: all .2s ease-in-out;
    cursor: pointer;
    transform: translateY(-0.1em)
  }
`;

const LinkedIn = styled(LinkedInIcon)`
  :hover {
    color: #eb5e28;
    transition: all .2s ease-in-out;
    cursor: pointer;
    transform: translateY(-0.1em);
  }
`;

const GitHub = styled(GitHubIcon)`
  :hover {
    color: #eb5e28;
    transition: all .2s ease-in-out;
    cursor: pointer;
    transform: translateY(-0.1em)
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translate(0%);
  }
  20% {
    opacity: 1;
    transform: translateX(0%);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(80%);
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 1;
    transform: translate(0%);
  }
`;

const EmailTextFalse = styled.span`
  visibility: hidden;
  font-size: max(15px, 1vw);

`;

const EmailText = styled.span`
  visibility: visible;
  animation: ${FadeIn} 1s ease-in, 1s ${FadeOut} 1s ease-out;
  font-size: max(15px, 1vw);
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Photo = styled.div`
  display: flex;
  margin: 10px;
  height: calc(100% - 20px);
  align-self: center;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const AboutText = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  height: calc(100% - 20px);
  white-space: break-spaces;
  justify-content: center;
  font-weight: bold;
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
//    hightlight around buttons s

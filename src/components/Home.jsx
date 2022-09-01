import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import homeAnimation from '../media/homeAnimation.PNG';

const Home = () => {
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
    <HomeContainer>
      <HomeTextBox>
          <HomeText>Clayton Chin</HomeText>
          <Icons>
            <Email sx={{ fontSize: '3vw', padding: '10px' }} onClick={handleEmailClick}/>
            <GitHub sx={{ fontSize: '3vw', padding: '10px' }} onClick={(e) => window.open('https://github.com/mrdooby')}/>
            <LinkedIn sx={{ fontSize: '3vw', padding: '10px' }} onClick={(e) => window.open('https://www.linkedin.com/in/chinclayton/')}/>
          </Icons>
          {click ? <div>
            <EmailText>My email has been copied to your clipboard !</EmailText>
          </div> : <div>
            <EmailTextFalse>My email has been copied to your clipboard !</EmailTextFalse>
          </div>}
      </HomeTextBox>
    </HomeContainer>
  )
}

export default Home;

// styled components
const HomeContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HomeTextBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fffcf2;
`;

const TextAnimation = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const HomeText = styled.span`
  display: flex;
  font: 700 12vw "Oswald", sans-serif;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
  text-align: center;
  background: url(${homeAnimation}) repeat;
  background-size: auto 12vw, auto 12vw;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${TextAnimation} 30s linear infinite;
  -webkit-transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
`;

const Icons = styled.span`
  display: flex;
  flex-direction: row;
  justify-items: space-around;
`;

const Email = styled(EmailIcon)`
  :hover {
    color: #eb5e28;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
`;

const LinkedIn = styled(LinkedInIcon)`
  :hover {
    color: #eb5e28;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
`;

const GitHub = styled(GitHubIcon)`
  :hover {
    color: #eb5e28;
    transition: all .2s ease-in-out;
    cursor: pointer;
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
`;

const EmailText = styled.span`
  visibility: visible;
  animation: ${FadeIn} 1s ease-in, 1s ${FadeOut} 1s ease-out;
`;

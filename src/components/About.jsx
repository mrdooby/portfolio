import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe.jsx';
import AboutKenji from './AboutKenji.jsx';
import AboutYuffie from './AboutYuffie.jsx';
import KenjiIcon from '../media/kenjiIcon.PNG';
import YuffieIcon from '../media/yuffieIcon.PNG';

const About = () => {
  const [view, setView] = useState('Me');
  const [zClay, setZClay] = useState(4);
  const [zKenji, setZKenji] = useState(1);
  const [zYuffie, setZYuffie] = useState(1);
  const [tClay, setTClay] = useState('-0.15em');
  const [tKenji, setTKenji] = useState(0);
  const [tYuffie, setTYuffie] = useState(0);
  const renderView = () => {
    switch (view) {
      case 'Me':
        return <AboutMe/>;
      case 'Kenji':
        return <AboutKenji/>;
      case 'Yuffie':
        return <AboutYuffie/>;
      default:
        return null;
    }
  }


  return (
    <AboutContainer>
      <TabBox>
        <ClayTab z={zClay} t={tClay}
        onClick={(e) => {
          setView('Me');
          setZClay(4);
          setZKenji(1);
          setZYuffie(1);
          setTClay('-0.15em');
          setTKenji(0);
          setTYuffie(0);
        }}
        >👦🏻</ClayTab>
        <KenjiTab z={zKenji} t={tKenji}
        onClick={(e) => {
          setView('Kenji');
          setZClay(1);
          setZKenji(4);
          setZYuffie(1);
          setTClay(0);
          setTKenji('-0.15em');
          setTYuffie(0);
          }}>🐺</KenjiTab>
        <YuffieTab z={zYuffie} t={tYuffie}
        onClick={(e) => {
          setView('Yuffie');
          setZClay(1);
          setZKenji(1);
          setZYuffie(4);
          setTClay(0);
          setTKenji(0);
          setTYuffie('-0.15em');
          }}>🐶</YuffieTab>
      </TabBox>
      <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
    </AboutContainer>
  )
}

export default About;

// styled components
const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vw;
`;

const TabBox = styled.div`
  display: flex;
  width: calc(100% - 4vw);
  position: relative;
  top: 25px;
`;

const ClayTab = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 10px 10px 0 0;
  margin-left: auto;
  margin-right: 15px;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  background-color: #ccc5b9;
  top: -25px;
  z-index: ${props => props.z};
  transform: translateY(${props => props.t});
  :hover {
    cursor: pointer;
    transform: translateY(-0.15em);
  }
  &:after {
    content: '';
    height: calc(25px + 0.15em);
    width: 50px;
    position: absolute;
    top: 0;
    border-radius: 5px 5px 0 0;
    background-color: #ccc5b9;
    z-index: -1;
    box-shadow: 0 -5px 5px -5px #858071, 5px 0 5px -5px #858071, -5px 0 5px -5px #858071;
  }
`;

const KenjiTab = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  border-radius: 10px 10px 0 0;
  margin-right: 15px;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  background-color: #ccc5b9;
  z-index: ${props => props.z};
  transform: translateY(${props => props.t});
  :hover {
    cursor: pointer;
    transform: translateY(-0.15em);
  }
  &:after {
    content: '';
    box-shadow: 0 -5px 5px -5px #858071, 5px 0 5px -5px #858071, -5px 0 5px -5px #858071;
    height: calc(25px + 0.15em);
    width: 50px;
    position: absolute;
    top: 0;
    border-radius: 5px 5px 0 0;
    background-color: #ccc5b9;
    z-index: -1;
  }
`;

const YuffieTab = styled.div`
display: flex;
height: 50px;
width: 50px;
border-radius: 10px 10px 0 0;
margin-right: 15px;
font-size: 40px;
justify-content: center;
align-items: center;
background-color: #ccc5b9;
z-index: ${props => props.z};
transform: translateY(${props => props.t});
:hover {
  cursor: pointer;
  transform: translateY(-0.15em);
}
&:after {
  content: '';
  box-shadow: 0 -5px 5px -5px #858071, 5px 0 5px -5px #858071, -5px 0 5px -5px #858071;
  height: calc(25px + 0.15em);
  width: 50px;
  position: absolute;
  top: 0;
  border-radius: 5px 5px 0 0;
  background-color: #ccc5b9;
  z-index: -1;
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
//    hightlight around buttons s
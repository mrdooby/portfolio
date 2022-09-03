import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiExpress, SiJest, SiJavascript, SiPostgresql, SiNginx, SiMongodb, SiPostman } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { IconContext } from "react-icons";
import KenjiIcon from '../media/kenjiIcon.PNG';
import YuffieIcon from '../media/yuffieIcon.PNG';
import $ from 'jquery';

const Home = () => {
  const [click, setClick] = useState(false)
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('claytonchin.dev@gmail.com');
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 2000)
  }

  // $(document).mousemove((e) => {
  //   setLeft(e.pageX);
  //   setTop(e.pageY)
  // })

  return (
    <HomeContainer id='home'>
      <TitleContainer>
        <Title>Clayton Chin</Title>
          {/* <Kenji x={left} y={top}/>
          <Yuffie/> */}
      </TitleContainer>
      <IconContainer>
        <IconContext.Provider value={{size: '8vh'}}>
          <SiPostgresql/><SiExpress/><FaReact/><FaNodeJs/><FaAws/><SiJest/><SiJavascript/><SiMongodb/><SiNginx/><SiPostman/>
        </IconContext.Provider>
      </IconContainer>
    </HomeContainer>
  )
}

export default Home;

// styled components
const HomeContainer = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #252422;
  margin-bottom: 1vh;
`;

const Title = styled.div`
  display: flex;
  font: 700 8vw "Mukta", sans-serif;
  color: white;
  text-shadow: 0 0 80px rgba(255,255,255,.5);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 1vh;
`;

const Kenji = styled.div`
  background-image: url(${KenjiIcon});
  height: 100px;
  width: 100px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
`;

const Yuffie = styled.div`
  display: flex;
  background-image: url(${YuffieIcon});
  height: 100px;
  width: 100px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
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
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiExpress, SiJest, SiJavascript, SiPostgresql, SiNginx, SiMongodb, SiPostman } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { IconContext } from "react-icons";


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
      <TitleContainer>
        <Title>Clayton Chin</Title>
      </TitleContainer>
      <IconContainer>
        <IconContext.Provider value={{size: '8vh'}}>
          <SiPostgresql/><SiMongodb/><SiExpress/><FaReact/><FaNodeJs/><FaAws/><SiJest/><SiJavascript/><SiNginx/><SiPostman/>
        </IconContext.Provider>
      </IconContainer>
    </HomeContainer>
  )
}

export default Home;

// styled components
const HomeContainer = styled.section`
  display: flex;
  border: solid black;
  height: 100vh;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  border: solid green;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-color: #252422;
  margin-bottom: 1vh;
`;

const Title = styled.div`
  display: flex;
  font: 700 8vw "Mukta", sans-serif;
  color: #fffcf2;
`;

const IconContainer = styled.div`
  display: flex;
  border: solid blue;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 1vh;
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
import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      {/* <HomeTextBox>
        <HomeText>
          Hi my name is Clayton Chin.
        </HomeText>
      </HomeTextBox> */}
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
  background-image: url('https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anya-spy-x-family-22.gif')
`;

const HomeTextBox = styled.div`
  position: absolute;
  border: 3px solid green;
  padding: 10px;
  height: 50%;
  width: 50%;
`;

const HomeText = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 75px;
`;



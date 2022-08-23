import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <HomeAnimation src='https://i.pinimg.com/originals/cf/b9/50/cfb950d45958903ee7990c4b7645c486.gif'/>
    </HomeContainer>
  )
}

export default Home;

// styled components
const HomeContainer = styled.section`
  height: 100vh;
  width: 100%;
`;

const HomeAnimation = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;



import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      Designed &amp; Built by Clayton Chin
    </FooterContainer>
  )
}

export default Footer;

// styled components
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
`
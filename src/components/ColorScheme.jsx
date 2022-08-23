import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const ColorScheme = () => {
  return (
    <ColorSchemeContainer>
      <ColorSchemeCircle1></ColorSchemeCircle1>
      <ColorSchemeCircle2></ColorSchemeCircle2>
      <ColorSchemeCircle3></ColorSchemeCircle3>
      <ColorSchemeCircle4></ColorSchemeCircle4>
      <ColorSchemeCircle5></ColorSchemeCircle5>
    </ColorSchemeContainer>
  )
}

export default ColorScheme;

// styled components
const ColorSchemeContainer = styled.section`
  position: fixed;
  bottom: 0;
  background-color: blue;
`;

const ColorSchemeCircle1 = styled.div`
  height: 1vw;
  width: 1vw;
  background-color: #fffcf2;
  border-radius: 100%;
  margin: 3px;
`;

const ColorSchemeCircle2 = styled.div`
  height: 1vw;
  width: 1vw;
  background-color: #ccc5b9;
  border-radius: 100%;
  margin: 3px;
`;

const ColorSchemeCircle3 = styled.div`
  height: 1vw;
  width: 1vw;
  background-color: #403d39;
  border-radius: 100%;
  margin: 3px;
`;

const ColorSchemeCircle4 = styled.div`
  height: 1vw;
  width: 1vw;
  background-color: #252422;
  border-radius: 100%;
  margin: 3px;
`;

const ColorSchemeCircle5 = styled.div`
  height: 1vw;
  width: 1vw;
  background-color: #eb5e28;
  border-radius: 100%;
  margin: 3px;
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
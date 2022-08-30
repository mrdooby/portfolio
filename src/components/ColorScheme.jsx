import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';

const ColorScheme = (props) => {
  return (
    <ColorSchemeContainer>
      <CircleSectionBox>
        <ColorSchemeCircle color={props.color}/>
        <CircleText>{props.color}</CircleText>
      </CircleSectionBox>
    </ColorSchemeContainer>
  )
}

export default ColorScheme;

// styled components
const ColorSchemeContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const animLineUp = keyframes`
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

const CircleSectionBox = styled.div`
  display: flex;
`;

const CircleText = styled.span`
  visibility: hidden;
  ${CircleSectionBox}:hover & {
    visibility: visible;
    animation: 2s ${animLineUp} ease-out;
  }
`;

const ColorSchemeCircle = styled.div`
  height: 1vw;
  width: 1vw;
  background-color: ${props => props.color};
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
//    hightlight around buttons s
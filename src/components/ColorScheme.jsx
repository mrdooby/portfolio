import React, { useState, useEffect, Suspense } from 'react';
import styled, { keyframes } from 'styled-components';

const ColorScheme = () => {
  return (
    <ColorSchemeContainer>
      <CircleSectionBox1>
        <CircleBackgroundTop>
          <ColorSchemeCircle1></ColorSchemeCircle1>
        </CircleBackgroundTop>
        <Circle1Text>#fffcf2 floral white</Circle1Text>
      </CircleSectionBox1>
      <CircleSectionBox2>
        <CircleBackground>
          <ColorSchemeCircle2></ColorSchemeCircle2>
        </CircleBackground>
        <Circle2Text>#ccc5b9 pale silver</Circle2Text>
      </CircleSectionBox2>
      <CircleSectionBox3>
        <CircleBackground>
          <ColorSchemeCircle3></ColorSchemeCircle3>
        </CircleBackground>
        <Circle3Text>#403d39 black olive</Circle3Text>
      </CircleSectionBox3>
      <CircleSectionBox4>
        <CircleBackground>
          <ColorSchemeCircle4></ColorSchemeCircle4>
        </CircleBackground>
        <Circle4Text>#252422 eerie black</Circle4Text>
      </CircleSectionBox4>
      <CircleSectionBox5>
        <CircleBackgroundBot>
          <ColorSchemeCircle5></ColorSchemeCircle5>
        </CircleBackgroundBot>
        <Circle5Text>#eb5e28 flame</Circle5Text>
      </CircleSectionBox5>
    </ColorSchemeContainer>
  )
}

export default ColorScheme;

// styled components
const ColorSchemeContainer = styled.section`
  position: fixed;
  bottom: 0;
  margin: 5px;
`;

const CircleBackgroundTop = styled.div`
  background-color: #293241;
  border-radius: 5px 5px 0 0;
`;

const CircleBackground = styled.div`
  background-color: #293241;
`;

const CircleBackgroundBot = styled.div`
  background-color: #293241;
  border-radius: 0 0 5px 5px;;
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

const CircleSectionBox1 = styled.div`
  display: flex;
`;
const CircleSectionBox2 = styled.div`
  display: flex;
`;
const CircleSectionBox3 = styled.div`
  display: flex;
`;
const CircleSectionBox4 = styled.div`
  display: flex;
`;
const CircleSectionBox5 = styled.div`
  display: flex;
`;

const Circle1Text = styled.span`
  visibility: hidden;
  ${CircleSectionBox1}:hover & {
    visibility: visible;
    animation: 2s ${animLineUp} ease-out;
  }
`;
const Circle2Text = styled.span`
  visibility: hidden;
  ${CircleSectionBox2}:hover & {
    visibility: visible;
    animation: 2s ${animLineUp} ease-out;
  }
`;
const Circle3Text = styled.span`
  visibility: hidden;
  ${CircleSectionBox3}:hover & {
    visibility: visible;
    animation: 2s ${animLineUp} ease-out;
  }
`;
const Circle4Text = styled.span`
  visibility: hidden;
  ${CircleSectionBox4}:hover & {
    visibility: visible;
    animation: 2s ${animLineUp} ease-out;
  }
`;
const Circle5Text = styled.span`
  visibility: hidden;
  ${CircleSectionBox5}:hover & {
    visibility: visible;
    animation: 2s ${animLineUp} ease-out;
  }
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
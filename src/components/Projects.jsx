import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsBox>
        <ProjectsTitleBox>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTitleBox>
        <ProjectsCarouselBox>
          <ProjectsCarouselText>Project Atelier</ProjectsCarouselText>
          <ProjectsCarouselText>Soulful Backend</ProjectsCarouselText>
          <ProjectsCarouselText>Vegetation Station</ProjectsCarouselText>
        </ProjectsCarouselBox>
        <ProjectsDescriptionBox>
          <ProjectsDescriptionInfoBox>
            <ProjectsDescriptionInfo>Projects info</ProjectsDescriptionInfo>
          </ProjectsDescriptionInfoBox>
          <ProjectsDescriptionImgBox>
            <ProjectsDescriptionImg/>
          </ProjectsDescriptionImgBox>
        </ProjectsDescriptionBox>
      </ProjectsBox>
    </ProjectsContainer>
  )
}

export default Projects;

// styled components
const ProjectsContainer = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const ProjectsBox = styled.div`
  width: 70%;
  border: solid white;
`;

const ProjectsTitleBox = styled.div`
  display: flex;
  border: solid blue;
`;

const ProjectsTitle = styled.div`
  font-size: 100px;
  padding-left: 1%;
  font-weight: bold;
  color: #fffcf2;
`;

const ProjectsCarouselBox = styled.div`
  display: flex;
  border: solid green;
  padding: 1%;
`;

const ProjectsCarouselText = styled.div`
  margin-right: 20px;
  color: #fffcf2;
  :hover {
    color: #eb5e28;
    cursor: pointer
  }
`;

const ProjectsDescriptionBox = styled.div`
  display: flex;
  border: solid red;
  padding: 10%;
`;

const ProjectsDescriptionInfoBox = styled.div`
  border: solid yellow;
`;

const ProjectsDescriptionInfo = styled.div`
  color: #ccc5b9;
`;

const ProjectsDescriptionImgBox = styled.div`
  border: solid pink;
  margin-left: auto;
`;

const ProjectsDescriptionImg = styled.img`
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
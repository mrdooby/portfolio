import React, { useState, useEffect, Suspense, useContext } from 'react';
import styled from 'styled-components';

const ProjectsDescription = ({ data }) => {
  return (
    <ProjectsDescriptionBox>
      <ProjectsDescriptionInfoBox>
        <ProjectsDescriptionInfo>{data.info}</ProjectsDescriptionInfo>
      </ProjectsDescriptionInfoBox>
      <ProjectsDescriptionImgBox>
        <ProjectsDescriptionImg src={data.img}/>
      </ProjectsDescriptionImgBox>
    </ProjectsDescriptionBox>
  )
};

export default ProjectsDescription;

// styled components

const ProjectsDescriptionBox = styled.div`
  display: flex;
  max-height: 100%;
`;


const ProjectsDescriptionInfoBox = styled.div`
  border-radius: 5px 0 0 5px;
  width: 39%;
  padding: 1%;
  background-color: #403d39;
`;

const ProjectsDescriptionInfo = styled.p`
  color: #ccc5b9;
  white-space: pre-wrap;
`;

const ProjectsDescriptionImgBox = styled.div`
  display: flex;
  width: 59%;
  object-position: contain;
`;

const ProjectsDescriptionImg = styled.img`
  max-width: 100%;
  max-height: 75%;
  border-radius: 0 5px 5px 0;
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
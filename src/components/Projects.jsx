import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { projectData } from '../data/ProjectsData.js';

const Projects = () => {
  return (
    <ProjectsContainer>
      <Grid container  padding='2vw'
      direction='column'>
        <Grid container item border='solid #403d39 1px' marginBottom='2vw' width='90%'
         height='45vh'
        >
          <Grid item md={6} borderRight='solid #403d39 1px'>
            <ProjectsPhoto image={projectData[0].img}/>
          </Grid>
          <Grid container item md={6} padding='1vw' display='flex' direction='column'>
            <ProjectsTitle>{projectData[0].title}</ProjectsTitle>
            <ProjectsText>{projectData[0].info}</ProjectsText>
            <ProjectsMembers>{projectData[0].members}</ProjectsMembers>
          </Grid>
        </Grid>
      <Grid container item border='solid #403d39 1px' marginBottom='2vw' width='90%'
        marginLeft='auto' height='45vh'
        >
          <Grid item md={6} borderRight='solid #403d39 1px' padding='1vw' display='flex' direction='column'>
            <ProjectsTitle>{projectData[1].title}</ProjectsTitle>
            <ProjectsText>{projectData[1].info}</ProjectsText>
            <ProjectsMembers>{projectData[1].members}</ProjectsMembers>
          </Grid>
          <Grid item md={6}>
            <ProjectsPhoto image={projectData[1].img}/>
          </Grid>
        </Grid>
        <Grid container item border='solid #403d39 1px' width='90%' height='45vh'>
        <Grid item md={6} borderRight='solid #403d39 1px'>
          <ProjectsPhoto image={projectData[2].img}/>
          </Grid>
          <Grid item md={6} padding='1vw' display='flex' direction='column'>
            <ProjectsTitle>{projectData[2].title}</ProjectsTitle>
            <ProjectsText>{projectData[2].info}</ProjectsText>
            <ProjectsMembers>{projectData[2].members}</ProjectsMembers>
          </Grid>
        </Grid>
      </Grid>
    </ProjectsContainer>
  )
}

export default Projects;

// styled components
const ProjectsContainer = styled.section`
  display: flex;
`;

const ProjectsTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: max(20px, 2vw);
  font-weight: bold;
`

const ProjectsText = styled.div`
  display: flex;
  justify-content: center;
  font-size: max(10px, 1vw);
  font-weight: bold;
  white-space: break-spaces;
`;

const ProjectsMembers = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: auto;
  color: #403d39;
`;

const ProjectsPhoto = styled.div`
  display: flex;
  background-image: url(${props => props.image});
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ccc5b9;
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
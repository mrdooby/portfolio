import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { projectData } from '../data/ProjectsData.js';

const Projects = () => {
  return (
    <ProjectsContainer>
      <Grid container border='solid blue' padding='2vw'
      direction='column'>
        <Grid container item border='solid green' marginBottom='2vw' width='90%'
         height='45vh'
        >
          <Grid item md={6} borderRight='solid purple'>
            <ProjectsPhoto image={projectData[0].img}/>
          </Grid>
          <Grid item md={6} padding='1vw' display='flex' direction='column'>
            <ProjectsTitle>{projectData[0].title}</ProjectsTitle>
            <ProjectsText>{projectData[0].info}</ProjectsText>
            <ProjectsMembers>{projectData[0].members}</ProjectsMembers>
          </Grid>
        </Grid>
      <Grid container item border='solid pink' marginBottom='2vw' width='90%'
        marginLeft='auto' height='45vh'
        >
          <Grid item md={6} borderRight='solid purple' padding='1vw' display='flex' direction='column'>
            <ProjectsTitle>{projectData[1].title}</ProjectsTitle>
            <ProjectsText>{projectData[1].info}</ProjectsText>
            <ProjectsMembers>{projectData[1].members}</ProjectsMembers>
          </Grid>
          <Grid item md={6}>
            Photo 2
          </Grid>
        </Grid>
        <Grid container item border='solid yellow' width='90%' height='45vh'>
        <Grid item md={6} borderRight='solid purple'>
            Photo 3
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
  border: solid black;
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
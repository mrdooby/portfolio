import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { projectData } from '../data/ProjectsData.js';

const Projects = () => {

  return (
    <ProjectsContainer>
      <ProjectsBox>
        <ProjectsTitleBox>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTitleBox>
        <GridContainer>
          <Grid container direction='column'>
            <Grid item border='solid red' height='50%' position='relative'></Grid>
            <Grid item border='solid red' height='50%' position='relative'>value1</Grid>
          </Grid>
          <Grid container direction='column'>
            <Grid item border='solid blue' height='50%' position='relative'></Grid>
            <Grid item border='solid blue' height='50%' position='relative'>value2</Grid>
          </Grid>
          <Grid container direction='column'>
            <Grid item border='solid yellow' height='50%' position='relative'></Grid>
            <Grid item border='solid yellow' height='50%' position='relative'>value3</Grid>
          </Grid>
        </GridContainer>
      </ProjectsBox>
    </ProjectsContainer>
  )
}

export default Projects;
//src='https://static.zerochan.net/Yor.Briar.full.3632904.jpg'
// styled components
const ProjectsContainer = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
`;

const ProjectsTitleBox = styled.div`
  display: flex;
`;

const ProjectsTitle = styled.div`
  font-size: 100px;
  font-weight: bold;
  color: #fffcf2;
`;

const GridContainer = styled.div`
  display: flex;
  height: 100%;
  border: solid white;
  overflow: auto;
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
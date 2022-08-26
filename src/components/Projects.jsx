import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { projectData } from '../data/ProjectsData.js';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Grid container spacing={1} position='relative'
      marginBottom='auto' height={{md: '100%'}}
      border='solid blue' direction='row' paddingLeft='12px'
      >
        <Grid container direction='column' height='100%' width='calc(100%/3)'>
          <Grid item md={6} position='relative' padding='20px'>
            <ProjectsPhoto image={projectData[0].img}></ProjectsPhoto>
          </Grid>
          <Grid item md={6} padding='20px'>
            <ProjectsText>{projectData[0].title}<br/>{projectData[0].info}</ProjectsText>
          </Grid>
        </Grid>
        <Grid container direction='column' height='100%' width='calc(100%/3)'>
        <Grid item md={6} position='relative' padding='20px'>
            <ProjectsPhoto image={projectData[1].img}></ProjectsPhoto>
          </Grid>
          <Grid item md={6} padding='20px'>
          <ProjectsText>{projectData[1].title}<br/>{projectData[1].info}</ProjectsText>
          </Grid>
        </Grid>
        <Grid container direction='column' height='100%' width='calc(100%/3)'>
          <Grid item md={6} position='relative' padding='20px'>
            <ProjectsPhoto image={projectData[2].img}></ProjectsPhoto>
          </Grid>
          <Grid item md={6} padding='20px'>
          <ProjectsText>{projectData[2].title}<br/>{projectData[2].info}</ProjectsText>
          </Grid>
        </Grid>
    </Grid>
    </ProjectsContainer>
  )
}

export default Projects;
//src='https://static.zerochan.net/Yor.Briar.full.3632904.jpg' xs 599, sm 899, md 1199, lg 1535, xl +
// styled components
const ProjectsContainer = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  border: solid gray;
  flex-direction: column;
`;

const ProjectsTitle = styled.div`
  display: flex;
  border: solid pink;
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 0;
  color: #fffcf2;
`;

const ProjectsPhoto = styled.div`
  display: flex;
  border: solid yellow;
  background-image: url(${props => props.image});
  height: 100%;
  background-size: cover;
`;

const ProjectsText = styled.div`
  display: flex;
  border: solid green;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  font-size: 1vw;
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
import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { projectData } from '../data/ProjectsData.js';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import ColorScheme from './ColorScheme.jsx';

const Projects = () => {

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Grid container spacing={0} position='relative'
      marginBottom='auto' height={{md: '100%'}}
      border='solid blue' direction='row'
      overflow='auto'
      >
        <Grid container direction='row' height='50%' width='100%%'>
          <Grid item md={6} position='relative'>
            <ProjectsPhoto image={projectData[0].img}>
              <ColorsBox><ColorScheme/></ColorsBox>
            </ProjectsPhoto>
          </Grid>
          <Grid item md={6}>
            <ProjectsText>
              {projectData[0].title}<br/>{projectData[0].info}
              <GithubButton onClick={(e) => {window.open(`${projectData[0].repo}`)}}><GitStyle/></GithubButton>
            </ProjectsText>
          </Grid>
        </Grid>
        <Grid container direction='row' height='50%' width='100%%'>
          <Grid item md={6}>
          <ProjectsText>
            {projectData[1].title}<br/>{projectData[1].info}
            <GithubButton onClick={(e) => {window.open(`${projectData[0].repo}`)}}><GitStyle/></GithubButton>
          </ProjectsText>
          </Grid>
          <Grid item md={6} position='relative'>
            <ProjectsPhoto image={projectData[1].img}></ProjectsPhoto>
          </Grid>
        </Grid>
        <Grid container direction='row' height='50%' width='100%%'>
        <Grid item md={6} position='relative'>
            <ProjectsPhoto image={projectData[2].img}></ProjectsPhoto>
          </Grid>
          <Grid item md={6}>
          <ProjectsText>
            {projectData[2].title}<br/>{projectData[2].info}
            <GithubButton onClick={(e) => {window.open(`${projectData[0].repo}`)}}><GitStyle/></GithubButton>
            </ProjectsText>
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
  background-image: url(${props => props.image});
  height: 100%;
  background-size: cover;
  :hover {
    background: linear-gradient(rgba(100,100,100,.7), rgba(255,255,255,.7)), url(${props => props.image});
    background-size: cover;
`;

const ProjectsText = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 1vw;
  flex-direction: column;
  background-color: #403d39;
`;

const GithubButton = styled.div`
  border: solid white;
  height: 10%;
  width: 50%;
  margin-top: auto;
  padding: 5px;
  border-radius: 5px;
  border-color: #fffcf2;
  margin-bottom: 5px;
  :hover {
    border-color: #eb5e28;
    box-shadow: 0 0 3px #eb5e28;
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
`;

const GitStyle = styled(GitHubIcon)`
  color: #fffcf2;
  margin: auto;
  border: solid transparent;
  border-radius: 100%;
  ${GithubButton}:hover & {
    color: #eb5e28;
    transition: all .2s ease-in-out;
  }
`;

const ColorsBox = styled.div`
  visibility: hidden;
  ${ProjectsPhoto}:hover & {
    visibility: visible;
  }
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
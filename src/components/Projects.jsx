import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { projectData } from '../data/ProjectsData.js';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

  return (
    <ProjectsContainer>
      <ProjectsBox>
        <ProjectsTitleBox>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTitleBox>
        <GridContainer>
          <Grid container spacing={0}
          direction={{xs: 'row', sm: 'row', md: 'column'}}
          overflow='auto'
          >
            <GridImage item
            position='relative' xs={12} sm={12} md={6} height={{xs: '50%'}}
            image={projectData[0].img} />
            <div/>
            <GridText container item
            position='relative' xs={12} sm={12} md={6}
            height='50%' width={{ xs: '100%', sm: '100%', md: '33.33%'}}>
              <>{projectData[0].title}</><br></br>
              <>{projectData[0].info}</>
              <GithubButton onClick={(e) => {window.open(`${projectData[0].repo}`)}}><GitStyle/></GithubButton>
            </GridText>
            <div/>

            <GridImage item
            position='relative' xs={12} sm={12} md={6}
            height={{xs: '50%'}} image={projectData[1].img}/>
                        <div/>

            <GridText container item
            position='relative' xs={12} sm={12} md={6}
            height='50%' width={{ xs: '100%', sm: '100%', md: '33.33%'}}>
              <>{projectData[1].title}</><br></br>
              <>{projectData[1].info}</>
              <GithubButton onClick={(e) => {window.open(`${projectData[1].repo}`)}}><GitStyle/></GithubButton>
            </GridText>
            <div/>

            <GridImage item
            position='relative' xs={12} sm={12} md={6}
            height={{xs: '50%'}} image={projectData[2].img}/>
                        <div/>

            <GridText container item
            position='relative' xs={12} sm={12} md={6}
            height='50%' width={{ xs: '100%', sm: '100%', md: '33.33%'}}>
              <>{projectData[2].title}</><br></br>
              <>{projectData[2].info}</>
              <GithubButton onClick={(e) => {window.open(`${projectData[2].repo}`)}}><GitStyle/></GithubButton>
            </GridText>
          </Grid>
        </GridContainer>
      </ProjectsBox>
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
  overflow: scrollY;
  padding: 5px;
`;

const GridText = styled(Grid)`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const GridImage = styled(Grid)`
  display: flex;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 3px;
`;

const GithubButton = styled.div`
  border: solid white;
  height: 10%;
  width: 50%;
  margin-top: auto;
  padding: 5px;
  border-radius: 5px;
  border-color: #fffcf2;
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

const GridTextTitle = styled.p`
  font-weight: bold;
`
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
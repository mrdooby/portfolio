import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { projectData } from '../data/ProjectsData.js';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
        <GridContainer>
          <Grid container spacing={0}
          direction={{xs: 'row', sm: 'row', md: 'column'}}
          overflow='auto'
          >
            <GridImage item
            position='relative' xs={12} sm={12} md={6} height={{xs: '50%'}}
            >
              <Image/>
            </GridImage>
            <GridText container item
            position='relative' xs={12} sm={12} md={6}
            height='50%' width={{ xs: '100%', sm: '100%', md: '33.33%'}}>
              <>{projectData[0].title}</><br></br>
              <>{projectData[0].info}</>
              <GithubButton onClick={(e) => {window.open(`${projectData[0].repo}`)}}><GitStyle/></GithubButton>
            </GridText>
            <GridImage item
            position='relative' xs={12} sm={12} md={6}
            height={{xs: '50%'}} image={projectData[1].img}/>
            <GridText container item
            position='relative' xs={12} sm={12} md={6}
            height='50%' width={{ xs: '100%', sm: '100%', md: '33.33%'}}>
              <>{projectData[1].title}</><br></br>
              <>{projectData[1].info}</>
              <GithubButton onClick={(e) => {window.open(`${projectData[1].repo}`)}}><GitStyle/></GithubButton>
            </GridText>
            <GridImage item
            position='relative' xs={12} sm={12} md={6}
            height={{xs: '50%'}} image={projectData[2].img}/>
            <GridText container item
            position='relative' xs={12} sm={12} md={6}
            height='50%' width={{ xs: '100%', sm: '100%', md: '33.33%'}}>
              <>{projectData[2].title}</><br></br>
              <>{projectData[2].info}</>
              <GithubButton onClick={(e) => {window.open(`${projectData[2].repo}`)}}><GitStyle/></GithubButton>
            </GridText>
          </Grid>
        </GridContainer>
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

const Image = styled.div`
  display: flex;
  border: solid yellow;
  background-image: url('https://i.kym-cdn.com/photos/images/newsfeed/001/464/818/f2a.jpg');
  height: 100%;
`;

const GithubButton = styled.div`
  border: solid white;
  height: 10%;
  width: 30%;
  margin-top: auto;
  padding: 5px;
  border-radius: 5px;
  border-color: #fffcf2;
  text-align: center;
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
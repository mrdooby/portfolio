import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { projectData } from '../data/ProjectsData.js';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import ColorScheme from './ColorScheme.jsx';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiExpress, SiJest, SiJavascript, SiPostgresql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { IconContext } from "react-icons";

const Projects = () => {

  return (
    <ProjectsContainer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Grid container spacing={0} position='relative'
      marginBottom='auto' height={{md: '100%'}}
      direction='row' overflow='auto'
      >
        <Grid container direction='row' height='50%' width='100%%'>
          <Grid item md={6} position='relative'>
            <ProjectsPhoto image={projectData[0].img}>
              <ColorsBox>
                Color Palette
                {['#3A606E','#607B7D','#828E82','#EF8354'].map((hex) => {
                  console.log(hex);
                  return <ColorScheme color={hex}/>
                })}
              </ColorsBox>
            </ProjectsPhoto>
          </Grid>
          <Grid container item md={6} direction='row'>
            <ProjectsText>
              <Text><TextTitle>{projectData[0].title}</TextTitle><br/>{projectData[0].info}</Text>
              <Icons>
                <IconContext.Provider value={{size: 42}}>
                  <SiExpress/><FaReact/><FaNodeJs/><FaAws/><SiJest/><SiJavascript/>
                </IconContext.Provider>
              </Icons>
              <GithubButton onClick={(e) => {window.open(`${projectData[0].repo}`)}}><GitStyle/></GithubButton>
            </ProjectsText>
          </Grid>
        </Grid>
        <Grid container direction='row' height='50%' width='100%%'>
          <Grid item md={6}>
          <ProjectsText>
            <Text><TextTitle>{projectData[1].title}</TextTitle><br/>{projectData[1].info}</Text>
            <Icons>
                <IconContext.Provider value={{size: 42}}>
                  <SiPostgresql/><SiExpress/><FaReact/><FaNodeJs/><FaAws/><SiJest/><SiJavascript/>
                </IconContext.Provider>
            </Icons>
            <GithubButton onClick={(e) => {window.open(`${projectData[0].repo}`)}}><GitStyle/></GithubButton>
          </ProjectsText>
          </Grid>
          <Grid item md={6} position='relative'>
            <ProjectsPhoto image={projectData[1].img}>
              <ColorsBox>
                  Color Palette
                  {['#D6CCC2','#EDEDE9','#D5BDAF','#F5EBE0','#807D7D'].map((hex) => {
                    console.log(hex);
                    return <ColorScheme color={hex}/>
                  })}
                </ColorsBox>
            </ProjectsPhoto>
          </Grid>
        </Grid>
        <Grid container direction='row' height='50%' width='100%%'>
        <Grid item md={6} position='relative'>
            <ProjectsPhoto image={projectData[2].img}>
              <ColorsBox>
                  Color Palette
                  {['#606C38','#283618','#FEFAE0','#DDA15E', '#BC6C25'].map((hex) => {
                    console.log(hex);
                    return <ColorScheme color={hex}/>
                  })}
                </ColorsBox>
            </ProjectsPhoto>
          </Grid>
          <Grid item md={6}>
          <ProjectsText>
            <Text><TextTitle>{projectData[2].title}</TextTitle><br/>{projectData[2].info}</Text>
            <Icons>
                <IconContext.Provider value={{size: 42}}>
                  <SiPostgresql/><SiExpress/><TbBrandReactNative/><FaNodeJs/><FaAws/><SiJest/><SiJavascript/>
                </IconContext.Provider>
              </Icons>
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
  justify-content: center;
  flex-direction: column;
`;

const ProjectsTitle = styled.div`
  display: flex;
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 0;
  color: #fffcf2;
`;

const ProjectsPhoto = styled.div`
  display: flex;
  background-image: url(${props => props.image});
  height: 50vh;
  background-size: cover;
  :hover {
    background: linear-gradient(rgba(100,100,100,.7), rgba(100,100,100,.7)), url(${props => props.image});
    background-size: cover;
`;

const ProjectsText = styled.div`
  display: flex;
  height: 50vh;
  font-size: 1vw;
  flex-direction: column;
  background-color: #403d39;
  align-items: center;
`;

const Text = styled.div`
  padding: 10px;
  white-space: break-spaces;
`;
const GithubButton = styled.div`
  border: solid white;
  height: 10%;
  width: 50%;
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

const Icons = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-top: auto;
  width: 100%;
  justify-content: space-evenly;
`;

const TextTitle = styled.div`
  font-size: 2vw;
  margin-bottom: 0;
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
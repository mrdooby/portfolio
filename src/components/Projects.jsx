import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
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
          <Grid
          container spacing={0}
          border='solid pink'
          direction={{ xs: "row", sm: "row"}}
          >
            {projectData.map((proj, index) => (
            <>
              <GridImageBox
              item xs={12} sm={6} md={4}
              border='solid yellow'
              image={proj.img}
              />
              <GridTextBox
              item xs={12} sm={6} md={4}
              border='solid white'>
                <p>{proj.info}</p>
              </GridTextBox>
            </>
            ))}
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
  overflow: auto;
`;

const ProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  border: solid red;
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
  flex-grow: 1;
`;

const GridImageBox = styled(Grid)`
  display: block;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50%;
  background-image: url(${props => props.image})
`;

const GridTextBox = styled(Grid)`
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
import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";

const Projects = () => {

  return (
    <ProjectsContainer>
      <ProjectsBox>
        <ProjectsTitleBox>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTitleBox>
        <GridContainer>
          <Grid
          container spacing={{ xs: 2, md: 0 }}
          columns={{ xs: 4, sm: 6, md: 3 }}
          border='solid pink'
          flexDirection='column'
          >
            {[0, 1, 2].map((value, index) => (
            <>
              <Grid
              item sm={6} key={index} border='solid white'>
                <div>{value}</div>
              </Grid>
              <GridImageBox item sm={4} key={index} border='solid yellow'>
                <GridImage />
              </GridImageBox>
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
  height: 50%;
  background-image: url('https://static.zerochan.net/Yor.Briar.full.3632904.jpg')
`;

const GridImage = styled.img`
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
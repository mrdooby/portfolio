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
        <>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {/*Render 3 empty black boxes as items of this container*/}
            {[0, 1, 2].map((value, index) => (
            <>
              <Grid item xs={2} sm={4} md={4} key={index} border='solid white'>
                <div>{value}</div>
              </Grid>
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div>{value}</div>
              </Grid>
            </>
            ))}
          </Grid>
        </>
      </ProjectsBox>
    </ProjectsContainer>
  )
}

export default Projects;

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
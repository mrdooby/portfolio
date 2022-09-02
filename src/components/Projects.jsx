import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const Projects = () => {
  return (
    <ProjectsContainer>
      <Grid container border='solid blue' padding='2vw'
      direction='column'>
        <Grid container item border='solid green' marginBottom='2vw' width='90%'
         height='45vh'
        >
          <Grid item md={6} borderRight='solid purple'>
            Photo 1
          </Grid>
          <Grid item md={6}>
            Text 1
          </Grid>
        </Grid>
        <Grid container item border='solid pink' marginBottom='2vw' width='90%'
        marginLeft='auto' height='45vh'
        >
        <Grid item md={6} borderRight='solid purple'>
            Photo 2
          </Grid>
          <Grid item md={6}>
            Text 2
          </Grid>
        </Grid>
        <Grid container item border='solid yellow' width='90%' height='45vh'>
        <Grid item md={6} borderRight='solid purple'>
            Photo 3
          </Grid>
          <Grid item md={6}>
            Text 3
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
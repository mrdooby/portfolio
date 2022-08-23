import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectsDescription from './ProjectsDescription.jsx';
import { projectData } from '../data/ProjectsData.js';

const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])

  return (
    <ProjectsContainer>
      <ProjectsBox>
        <ProjectsTitleBox>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTitleBox>
        <ProjectsCarouselBox>
          <ProjectsCarouselText>Project Atelier</ProjectsCarouselText>
          <ProjectsCarouselText>Soulful Backend</ProjectsCarouselText>
          <ProjectsCarouselText>Vegetation Station</ProjectsCarouselText>
        </ProjectsCarouselBox>
        <Embla ref={emblaRef}>
          <EmblaContainer>
            {projectData.map((e, i) => {
              return (
              <EmblaSlide>
                <ProjectsDescription data={e}/>
              </EmblaSlide>
              )
            })}

          </EmblaContainer>
        </Embla>
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
  width: 70%;
`;

const ProjectsTitleBox = styled.div`
  display: flex;
`;

const ProjectsTitle = styled.div`
  font-size: 100px;
  padding-left: 1%;
  font-weight: bold;
  color: #fffcf2;
`;

const ProjectsCarouselBox = styled.div`
  display: flex;
  padding: 1%;
`;

const ProjectsCarouselText = styled.div`
  font-size: 25px;
  margin-right: 20px;
  color: #fffcf2;
  :hover {
    color: #eb5e28;
    cursor: pointer
  }
`;

const Embla = styled.div`
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  display: flex;
`;

const EmblaSlide = styled.div`
  flex: 0 0 100%;
  align-items:
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
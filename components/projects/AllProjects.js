'use client';
import { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import useWindowSize from '@/components/navbar/helper/useWindowSize';
import MoveDownUpAnimation from '@/lib/animations/moveDownAnimation';
import ImagesEnterAnimation from '@/lib/animations/imagesEnterAnimation';
import styles from './allProjects.module.css';

export default function AllProjects ({projectsData}) {
 
  const windowSize = useWindowSize();  
  const isLandscape = windowSize.width >=500 && windowSize.width <=950 && windowSize.height <500 ;  
  
  const handleProjectClick = () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);    
  }

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if(savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
      sessionStorage.removeItem('scrollPosition');
    }    
  }, []);

  return(       
    <div className={`${styles.pageContainer} ${ isLandscape ? styles.pageContainerLandscape : null}`}>
      <MoveDownUpAnimation className={`${styles.title} ${isLandscape ? styles.titleLandscape : '' }`} > 
        PROJEKTI 
      </MoveDownUpAnimation>
      <div className= {`${styles.projectsCardsContainer} ${ isLandscape ? styles.projectsCardsContainerLandscape : ''}`}>
      {
        projectsData.map((project, index) => (
          <ImagesEnterAnimation key={index} index={index} delayTiming={0.2}>
            <ProjectItem coverImage={project.imageUrl}
                projectId={project.projectId}
                title = {project.title}
                size = {project.size}
                handleProjectClick={handleProjectClick}
            />
          </ImagesEnterAnimation>
        ))
      }
      </div>
    </div>
  );
}
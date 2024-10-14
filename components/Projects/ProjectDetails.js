'use client';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled } from "react-icons/tb";
import { imageVideoRender } from './helpers/imageVideoRender';
import styles from './projectsDetails.module.css';

export default function ProjectsDetails({projectDetails}) {

  const [ slideIndex, setSlideIndex ] = useState(0);
  const [ sliderMob, setSliderMob] = useState(false);
  const [direction, setDirection] = useState(0); 
  const touchStartX = useRef(null);
  
  const handlePreviousArrow = () => {
    setDirection(-1);
    if(slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }      
  }

  const handleNextArrow = () => {
    setDirection(1);
    if(slideIndex < projectDetails.length -1) {
      setSlideIndex(prev => prev + 1);
    }   
  }

  const handleCircleClick = (number) => {
    if(number > slideIndex){
      setDirection(1);
    } 
    if (number < slideIndex) {
      setDirection(-1);
    }
    setSlideIndex(number);
    if(number === projectDetails.length -1 || number === 0) setSliderMob(prev => !prev);
  } 

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;    
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;

    if (diff > 50 ) {
      setSliderMob(prev => !prev);
      handlePreviousArrow();      
    }
    if (diff < -50 ) {
      setSliderMob(prev => !prev)
      handleNextArrow();
    }
    touchStartX.current = null;    
  };  

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
       
    return () => {      
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };    
  }, [sliderMob]); // eslint-disable-line react-hooks/exhaustive-deps

  return ( 
    <div className={styles.backgroundProjects}>
      <div className={styles.pageContainer}>
        <div className={styles.buttonContainer}>
          <Link href={'/projects'} >
            <button className={styles.backButton}> 
              NAZAD
            </button>
          </Link>
        </div>
        <div className={styles.projectCardContainer}>
          <div className={styles.projectInfo}>
                <p> Lokacija: {projectDetails[0].location} </p>
                <p> Investitor: {projectDetails[0].investor} </p>
                <p> Površina: {projectDetails[0].size}  m<sup>2</sup></p>
          </div>
          <div className={styles.imageAndArrowsContainer}>
            <div className={styles.arrowContainer}>
              <TbArrowBadgeLeftFilled className={`${slideIndex === 0 ? styles.arrowHidden : styles.arrow}`}
                  onClick={handlePreviousArrow} 
              />
            </div>
            <div className={styles.imageContainer}> 
              {                
                imageVideoRender(projectDetails[slideIndex].imageUrl, styles.image, direction, slideIndex)                  
              }      
            </div>
            <div className={styles.arrowContainer}> 
              <TbArrowBadgeRightFilled className={`${slideIndex === projectDetails.length - 1 ? styles.arrowHidden : styles.arrow}`} 
                  onClick={handleNextArrow}
              />
            </div>            
          </div>
          <div className={styles.circlesContainer} >
            {
              projectDetails.map((slide, index) => (
                <span key={index} 
                className={`${styles.circle} ${slideIndex === index ? styles.activeCircle : null}`}
                    onClick={() => handleCircleClick(index)} 
                > 
                </span>
              ))
            } 
          </div>             
        </div>
      </div>      
    </div>
  );
}
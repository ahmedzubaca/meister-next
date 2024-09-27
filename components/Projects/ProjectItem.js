import Image from 'next/image';
import Link from 'next/link';
import { useState  } from 'react';
import styles from './projectItem.module.css';

export default function ProjectItem({ coverImage, 
                                      projectId, 
                                      title, 
                                      size,
                                      handleProjectClick                                      
                                    }) {

  const [isHover, setIsHover] = useState(false);
  const routeSlug = projectId.split('-').slice(1).join('-')                                     
  
  return( 
    <div  className={styles.overallContainer}> 
      <div className={styles.cardContainer}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleProjectClick} 
      > 
        <Link href={`/projects/${projectId}`}>
          <div className={styles.imgContainer}>        
            <Image src={coverImage} alt='slika' width={1400} height={700} priority             
                  className={`${styles.projectImg} ${isHover ? styles.projectImgHovered : ''}`}
            />
            {
              isHover
              ?  
                <div className={styles.learnMore}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  SAZNAJ VIŠE  
                </div>            
              : null
              }
          </div>
          <div className={`${styles.projectInfo} ${isHover ? styles.projectInfoHovered : ''}`} 
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}              
          >           
            <p className={styles.projectTitle}> {title} </p>
            <p className={styles.projectSize}> {size} m<sup>2</sup>  </p>
          </div>
        </Link>
      </div>           
    </div>       
  );
}
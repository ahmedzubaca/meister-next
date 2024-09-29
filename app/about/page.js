import Services from '@/components/services/Services';
import ReferenceLogos from '@/components/referenceLogos/ReferenceLogos'
import PageTransition from '@/lib/animations/pageTransition';
import MoveDownUpAnimation from '@/lib/animations/moveDownAnimation';
import styles from './about.module.css';

export const metadata = {
  title: 'O nama'  
};

export default function About() {
  
  return (
    <>
      <PageTransition>
        <div className={styles.servicesBackground}>
          <div className={styles.bufferDiv}></div>
            <MoveDownUpAnimation className={styles.contentContainer} >
              <Services /> 
            </MoveDownUpAnimation>
        </div>
        <ReferenceLogos />
      </PageTransition>
    </>
  )
} 
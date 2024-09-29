import Services from '@/components/services/Services';
import ReferenceLogos from '@/components/referenceLogos/ReferenceLogos'
import PageTransition from '@/lib/animations/pageTransition';
import MoveDownUpAnimation from '@/lib/animations/moveDownAnimation';
import styles from './about.module.css';

export const metadata = {
  title: 'O nama',
  description: 'Meister d.o.o. je primarno orjentisan na brzu i kvalitetnu izgradnju' + 
  'ali jednako kvalitetno nudi rješenja za arhitektonske i statičke projekte' + 
  'kao i profesionalnu pomoć u prodaji nekretnina.'
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
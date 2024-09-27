import PageTransition from '@/lib/animations/pageTransition';
import TitlePage from '@/components/titlePage/TitlePage';
import Services from '@/components/services/Services';
import ReferenceLogos from '@/components/referenceLogos/ReferenceLogos';
import styles from './page.module.css';

export default function Home() {
  return(    
    <PageTransition>
      <TitlePage />
      <div className={styles.servicesBackground}>
        <Services />
      </div>
      <ReferenceLogos />
    </PageTransition>    
  );
}

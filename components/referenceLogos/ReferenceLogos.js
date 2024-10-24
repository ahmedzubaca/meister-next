import Image from 'next/image';
import Counter from './Counter';
import ImagesEnterAnimation from '@/lib/animations/imagesEnterAnimation';
import styles from './referenceLogos.module.css';
import { getLogos } from '@/database/dataFromDb/referenceLogosFromDb';
//import {referenceLogosData} from './referenceLogosData';

function ReferenceLogos() {

  const referenceLogos = getLogos();
  
  return(
    <div className={styles.overallContainer}>
      <Counter /> 
      <div className={styles.logosContainer} >        
        {
          referenceLogos.map((logo, index) => (
            <ImagesEnterAnimation key={index} index={index} delayTiming={0.1}>
              <div> 
                <Image src={logo.logoUrl} alt='logo'
                      width={100}
                      height={50}
                      priority
                      className={styles.logo}
                />
              </div> 
            </ImagesEnterAnimation>
          ))
        }
      </div> 
    </div>
  )
}
export default ReferenceLogos;
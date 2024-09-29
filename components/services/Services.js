'use client'
import Image from 'next/image';
import styles from './services.module.css';
import {servicesCardsData} from './servicesCardData';
import ServicesAnimation from '@/lib/animations/servicesAnimation';
import useWindowSize from '../navbar/helper/useWindowSize';


function Services() {

  const windowSize = useWindowSize();  
  
  return(
    windowSize.width !== undefined && (    
    <div className={styles.contentContainer}>
      <div className={styles.titleDiv}> VAŠA FIRMA ZA SVE</div>
      <div className={styles.servicesContainer}>         
        {
          servicesCardsData.map((service, index) => (
            <ServicesAnimation key={index} index={index} screenWidth={windowSize.width}>
              <div className={styles.cardContainer} key={service.Id}>
                <div className={styles.iconContainer}>
                  <Image src={service.icon}  alt='icon' 
                      className={styles.icon}/>
                </div>
                <div className={styles.serviceTitle}>
                  <h3> {service.title} </h3>
                  <h3> {service.subtitle} </h3>
                </div>
                <div className={styles.serviceDescription}> {service.text} </div>
              </div>
            </ServicesAnimation>
          ))
        }          
      </div> 
    </div>
    )
  )
}
export default Services;
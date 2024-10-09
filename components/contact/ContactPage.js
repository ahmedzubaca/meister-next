'use client';
import { useRef, useEffect } from 'react';
import { useFormState } from 'react-dom';
import sendEmail from './sendEmail';
import { emailNotifications } from '@/lib/notificationMessages/emailNotifications'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoveDownUpAnimation from '@/lib/animations/moveDownAnimation';
import PageTransition from '@/lib/animations/pageTransition';
import ContactAnimation from '@/lib/animations/contactAnimation';
import styles from './contact.module.css';

export default function ContactPage() {

  const [state, formAction] = useFormState(sendEmail, {message: null})
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);
  
  const clearUserInfo = () => {
    if(formRef.current !== null) {
      formRef.current.reset()
    }    
  }

  useEffect(() => {
    if(state.message !== null) { 
      if (state.message === emailNotifications.invalidInput) {             
        toast.error(emailNotifications.invalidInput);              
      } 
      if (state.message === emailNotifications.emailSent) {
        toast.success(emailNotifications.emailSent);
        clearUserInfo()              
      }
      if (state.message === emailNotifications.serverError) {             
        toast.error(emailNotifications.serverError);
        clearUserInfo()              
      }
    }
  }, [state])
 
  return(
    <PageTransition>       
      <div className={styles.pageContainer} >
        <MoveDownUpAnimation className={styles.overallContactContainer}>
          <ContactAnimation className={styles.addressContainer} isLeft={true}>
            <div>
              <h5>Adresa:</h5>
              <p> Uglješići 5j, 71320 Vogošća </p>
              <p> Sarajevo </p> 
              <p> Bosna i Hercegovina </p>              
            </div>
            <div> 
              <h5>Kontakt:</h5>  
              <p>Telefon: +387 (0)33 878 210</p>
              <p> Fax: +387 (0)33 878 153</p>
              <p>E-mail: info@meister.ba</p>
            </div>          
          </ContactAnimation> 
          <div className={styles.mapContainer}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10541.558246144192!2d18.33570866203796!3d43.89787913746111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cd0cc361bb0d%3A0x850175cb9dd85b29!2sMeister%20d.o.o.%20Sarajevo!5e1!3m2!1sbs!2sba!4v1723736598980!5m2!1sbs!2sba"
              allowFullScreen=""            
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>           
          </div> 
          <ContactAnimation className={styles.formContainer} isLeft={false}>            
            <form action={formAction} ref={formRef}>          
              <div className={styles.userDataContainer}>
                <div className={styles.contactNote}> Kontaktirajte nas: </div>                      
                <input type='text' id='firstName' name='firstName' required ref={firstNameRef}
                        placeholder='Ime (obavezno)'                   
                />            
                <input type='text' id='lastName' name='lastName' required ref={lastNameRef}
                      placeholder='Prezime (obavezno)'                  
                />
                <input type='email' id='email' required ref={emailRef} 
                      name='email' placeholder='E-mail (obavezno)'                   
                />            
              </div> 
              <div className={styles.messageButtonContainer}>         
                <textarea className={styles.messageContainer}
                          name='message' 
                          id='message'
                          placeholder='Vaša poruka...'
                          ref={messageRef}
                          required                    
                >
                </textarea> 
                <button className={styles.submitButton}>
                  Pošalji 
                </button>
              </div>          
            </form>
          </ContactAnimation>
          <ToastContainer autoClose={2000}/>         
        </MoveDownUpAnimation>          
      </div> 
    </PageTransition>
  )
}
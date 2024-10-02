'use client';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoveDownUpAnimation from '@/lib/animations/moveDownAnimation';
import PageTransition from '@/lib/animations/pageTransition';
import ContactAnimation from '@/lib/animations/contactAnimation';
import styles from './contact.module.css';

export default function ContactPage() {

  const initUserInfo = { 
    firstName: '',   
    lastName: '',
    email: '',
    message: ''
  }
  
  const [isBeingSent, setIsBeingSent] = useState(false)
  const [userInfo, setUserInfo] = useState(initUserInfo);  
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
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(firstNameRef.current !== null && lastNameRef.current !== null
      && emailRef.current !== null && messageRef.current !== null) {
       setUserInfo({
         ...userInfo,  firstName: firstNameRef.current.value,
                       lastName: lastNameRef.current.value,
                       email: emailRef.current.value,
                       message: messageRef.current.value
       })     
    try {
      setIsBeingSent(true);
      const response = await fetch('/api/emailApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (response.ok) {
        setIsBeingSent(false);        
        toast.success('Vaša poruka je uspješno poslana!');
        clearUserInfo();        
      } else {
        setIsBeingSent(false);
        toast.error('Greška servera. Molimo pokušajte kasnije.');
      }
      } catch (error) {
        toast.error('Greška servera. Molimo pokušajte kasnije.');
      }
    } else {
      toast.error('Molimo popunite sva polja.')
    }
  }; 
 
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
            <form onSubmit={handleSubmit} ref={formRef}>          
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
                <button className={styles.submitButton}                
                        disabled={isBeingSent}
                >
                  {isBeingSent ? 'Slanje poruke je u toku...' : 'Pošalji'}        
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
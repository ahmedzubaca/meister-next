'use server'
import sgMail from '@sendgrid/mail';
import { emailNotifications } from '@/lib/notificationMessages/emailNotifications'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(prevState, formData) {

  function isInvalidInput(text) {
    return(!text || text === null || text === undefined || text.trim() === '');    
  }

  const userData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message')
  }; 
  
  if(
    isInvalidInput(userData.firstName) ||
    isInvalidInput(userData.lastName) ||
    isInvalidInput(userData.email) ||    
    isInvalidInput(userData.message) ||
    !userData.email.includes('@')
  ) {
      return {
        message: emailNotifications.invalidInput
      }
  };
  
  const {firstName, lastName, email, message} = userData;      
  const msg = {
    to: process.env.EMAIL,
    from: process.env.EMAIL,
    subject: `Poruka od ${firstName}` + " " + `${lastName}`,
    text: `Email pošiljaoca: ${email}` + "\nPoruka:" + `\n${message}` 
  }; 
  try { 
    await sgMail.send(msg);
    return {
      message: emailNotifications.emailSent
    };
  } catch (error) {
    return {
      message: emailNotifications.serverError
    };
  }
}
'use server'
import sgMail from '@sendgrid/mail';
import { emailNotifications } from '@/lib/notificationMessages/emailNotifications'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(prevState, formData) {

  function isInvalidInput(text) {
    return(!text || text === null || text === undefined || text.trim() === '');    
  };
  
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const message = formData.get('message');
  
  if(
    isInvalidInput(firstName) ||
    isInvalidInput(lastName) ||
    isInvalidInput(email) ||    
    isInvalidInput(message) ||
    !email.includes('@')
  ) {
      return {
        message: emailNotifications.invalidInput
      }
  };
  
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
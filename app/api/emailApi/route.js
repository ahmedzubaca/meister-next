import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) { 

  try {
    const {firstName, lastName, email, message} = await request.json();
        
    const msg = {
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      subject: `Poruka od ${firstName}` + " " + `${lastName}` + " " + `${email}`,
      text: `Email pošiljaoca: ${email}` + "\nPoruka:" + `\n${message}` 
    };    
    await sgMail.send(msg);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('SendGrid error:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
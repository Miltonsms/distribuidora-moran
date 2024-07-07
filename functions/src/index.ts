import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'estuardosms@gmail.com',
    pass: 'ale24427592sms'
  }
});

export const sendEmail = functions.https.onCall(async (data, context) => {
  const { to, subject, text } = data;

  const mailOptions = {
    from: 'estuardosms@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error enviando correo:', error);
    throw new functions.https.HttpsError('internal', 'Error enviando correo');
  }
});
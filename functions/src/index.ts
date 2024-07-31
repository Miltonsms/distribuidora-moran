import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();
const transporter = nodemailer.createTransport({
  host: 'mail.dismogt.com', // Cambia esto al host SMTP de tu proveedor
  port: 26, // Cambia esto al puerto adecuado (usualmente 587 o 465)
  secure: false, // true para port 465, false para otros puertos
  auth: {
    user: 'notificacion@dismogt.com',
    pass: 't6ulpg56i35e'
  },
  tls: {
    rejectUnauthorized: false, // A veces es necesario para proveedores de SMTP personalizados
  }
});
export const sendEmail = functions.https.onCall(async (data, context) => {
  const { to, subject,text,buffer } = data;
  const mailOptions = {
    from: 'notificacion@dismogt.com',
    to: to,
    subject: subject,
    text:text,
    attachments: [
      {
        filename: 'document.pdf',
        content: Buffer.from(buffer, 'base64'),
        contentType: 'application/pdf'
      }
    ]
  };
  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error enviando correo:', error);
    throw new functions.https.HttpsError('internal', 'Error enviando correo');
  }
});
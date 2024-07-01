import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as XLSX from 'xlsx';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
export const processFile = functions.https.onCall(async (data, context) => {
  console.log("prueba")
  const fileUrl = data.url;
  const bucket = admin.storage().bucket();
  const file = bucket.file(fileUrl);

  const [fileData] = await file.download();
  const workbook = XLSX.read(fileData, { type: 'buffer' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const employees = XLSX.utils.sheet_to_json(sheet);

  const docDefinition = {
    content: [
      { text: 'Monthly Payments', style: 'header' },
      ...employees.map((employee: any) => ({
        text: `Name: ${employee.Name}, Email: ${employee.Email}, Salary: ${employee.Salary}`
      }))
    ]
  };

  const pdfDoc = pdfMake.createPdf(docDefinition);

  const pdfBuffer: Buffer = await new Promise((resolve, reject) => {
    pdfDoc.getBuffer(buffer => {
      resolve(buffer);
    });
  });

  const pdfFile = bucket.file(`pdfs/${Date.now()}.pdf`);
  await pdfFile.save(pdfBuffer);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'estuardosms@gmail.com',
      pass: 'ale24427592sms'
    }
  });

  await Promise.all(employees.map((employee: any) => {
    const mailOptions = {
      from: 'milsmsramirezz@gmail.com',
      to: employee.Email,
      subject: 'Monthly Payment Details',
      text: `Dear ${employee.Name}, please find attached your payment details for the month.`,
      attachments: [
        {
          filename: 'PaymentDetails.pdf',
          content: pdfBuffer
        }
      ]
    };

    return transporter.sendMail(mailOptions);
  }));

  return { message: 'File processed and emails sent successfully' };
});
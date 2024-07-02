import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})

export class CreatePdfBoletaService {

  constructor() { }

  generatePDF(datos:any) {
    const documentDefinition = {
      content: [
        {
          columns: [
            {
              image: 'data:image/png;base64,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', // Reemplaza con tu imagen en base64
              width: 60,
              alignment: 'left'
            },
            {
              text: 'DISTRIBUIDORA MORAZÁN S.A.\nBOLETA PAGO SALARIO DEL 01 AL 30 ABRIL 2024',
              style: 'header'
            }
          ]
        },
        {
          text: '\nFECHA: 30/04/2024\n\n',
          style: 'subheader'
        },
        {
          style: 'table',
          table: {
            headerRows: 1,
            widths: [110, 180, 110, 110],
            body: [
              [
                { text: 'CÓDIGO:', style: 'headertext' }, { text: '56230:', style: 'headertext2' },
                { text: 'No. DE NIT:', style: 'headertext' }, { text: '55371906:', style: 'headertext2' }],
              [
                { text: 'NOMBRE:', style: 'headertext' }, { text: datos.nombre, style: 'headertext2' },
                { text: 'No. DPI:', style: 'headertext' }, { text: '1942099621612:', style: 'headertext2' }],
              [
                { text: 'CARGO:', style: 'headertext' }, { text: 'Auxiliar de Entrega:', style: 'headertext2' },
                { text: 'SUCURSAL:', style: 'headertext' }, { text: 'Chimaltenango:', style: 'headertext2' }],
              [
                { text: 'DÍAS DEVENGADOS:', style: 'headertext' }, { text: '30', style: 'headertext2' },
                { text: 'FECHA DE BAJA:', style: 'headertext' }, { text: ' :', style: 'headertext2' }]
            ]
          },
          layout: 'noBorders'
        },
        {
          style: 'table',
          table: {
            headerRows: 0,
            widths: [300, '*'],
            body: [
              [
                { text: 'DESCRIPCIÓN', style: 'tableHeader' },
                { text: 'QUETZALES', style: 'tableHeader' }
              ],
              ['Salario Devengado', 'Q3,227.82'],
              ['Bonificación Dcto 37-2001', 'Q1,531.68'],
              ['Pago Asueto', 'Q0.00'],
              ['Otras Bonificaciones', 'Q0.00'],
              ['Pago Variable', 'Q0.00'],
              ['Pagos Pendientes', 'Q0.00'],
              [{ text: 'TOTAL INGRESOS', style: 'totalHeader' }, 'Q4,759.50'],
              ['Descuento IGSS', 'Q155.90'],
              ['Impuesto Sobre la Renta', 'Q13.28'],
              ['Pago Variable 80% aplica', 'Q0.00'],
              ['Descuento Préstamo Salarial', 'Q0.00'],
              ['Descuento de Faltantes en Liquidaciones y Bodegas', 'Q0.00'],
              ['Descuento por Equipo y Flota', 'Q0.00'],
              ['Descuento Autoconsumo', 'Q0.00'],
              ['Anticipo Quincenal', 'Q0.00'],
              ['Otros Descuentos', 'Q0.00'],
              ['Descuento de Ausencias Injustificadas', 'Q0.00'],
              ['Descuento Anticipo Bonificación', 'Q0.00'],
              ['Embargos Salariales', 'Q0.00'],
              ['Boleta de Control', 'Q0.00'],
              [{ text: 'TOTAL DESCUENTOS', style: 'totalHeader' }, 'Q169.19'],
              [{ text: 'NETO RECIBIDO', style: 'totalHeader' }, 'Q4,590.31']
            ]
          }
        },
        {
          text: 'HAGO CONSTAR QUE HE RECIBIDO A MI ENTERA SATISFACCIÓN LAS CANTIDADES ARRIBA DETALLADAS Y ESTOY DE ACUERDO CON LOS DESCUENTOS REALIZADOS POR DISTRIBUIDORA MORAZÁN, S.A.',
          margin: [0, 10, 0, 20]
        },
        {
          columns: [
            { text: 'F. ____________________________\n'+datos.nombre,
               alignment: 'center' 
              
            }
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          alignment: 'center'
        },
        subheader: {
          fontSize: 12,
          bold: true
        },
        table: {
          margin: [0, 5, 0, 15]
        },
        tableHeader: {
          bold: true,
          fontSize: 11,
          color: 'black'
        },
        totalHeader: {
          bold: true,
          fontSize: 12,
          color: 'black',
          alignment: 'right'
        },
        headertext: {
          bold: true
        },
        headertext2: {
          fontSize: 11,
          alignment: 'left'
        }
      }
    };

    pdfMake.createPdf(documentDefinition).open();
  }
}

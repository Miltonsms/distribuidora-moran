import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})

export class CreatePdfBoletaService {

  constructor() { }
  getvalorDecimal(value: number): string {
    return "Q " + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  generatePDF(datos:any,fechaActual:string,fechaTitulo:string) {
    const documentDefinition = {
      content: [
        {
          columns: [
            {
              image: 'data:image/png;base64,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', // Reemplaza con tu imagen en base64
              width: 75,
              alignment: 'left',
            },
            {
              text: 'DISTRIBUIDORA MORAZÁN S.A.\n'+fechaTitulo,
              style: 'header',
              margin: [0, 0, 0, 0]
            }
          ]
        },
        {
          text:  '\nFECHA: '+fechaActual+' \n\n',
          style: 'subheader'
        },
        {
          style: 'table',
          table: {
            headerRows: 1,
            widths: [110, 180, 110, 110],
            body: [
              [
                { text: 'CÓDIGO:', style: 'headertext' }, { text: datos.codigo, style: 'headertext2' },
                { text: 'No. DE NIT:', style: 'headertext' }, { text: datos.nit, style: 'headertext2' }],
              [
                { text: 'NOMBRE:', style: 'headertext' }, { text: datos.nombre, style: 'headertext2' },
                { text: 'No. DPI:', style: 'headertext' }, { text: datos.dpi, style: 'headertext2' }],
              [
                { text: 'CARGO:', style: 'headertext' }, { text: datos.cargo, style: 'headertext2' },
                { text: 'SUCURSAL:', style: 'headertext' }, { text: datos.sucursal, style: 'headertext2' }],
              [
                { text: 'DÍAS DEVENGADOS:', style: 'headertext' }, { text: datos.dias_devengados, style: 'headertext2' },
                { text: 'FECHA DE BAJA:', style: 'headertext' }, { text: datos.fecha_de_baja, style: 'headertext2' }]
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
              ['Salario Devengado', this.getvalorDecimal( datos.salario_devengado)],
              ['Bonificación Dcto 37-2001', this.getvalorDecimal( datos.bonificacion_decreto_37_2001)],
              ['Pago Asueto', this.getvalorDecimal( datos.pago_asueto)],
              ['Otras Bonificaciones', this.getvalorDecimal( datos.otras_bonificaciones)],
              ['Pago Variable', this.getvalorDecimal( datos.pago_variable)],
              ['Pagos Pendientes', this.getvalorDecimal( datos.pago_pendiente)],
              [{ text: 'TOTAL INGRESOS', style: 'totalHeader' }, this.getvalorDecimal( datos.total_ingreso)],
              ['Descuento IGSS', this.getvalorDecimal( datos.descuento_igss)],
              ['Impuesto Sobre la Renta', this.getvalorDecimal( datos.impuesto_sobre_renta)],
              ['Pago Variable 80% aplica', this.getvalorDecimal( datos.pago_variable_80_aplica)],
              ['Descuento Préstamo Salarial', this.getvalorDecimal( datos.descuento_prestamo_salarial)],
              ['Descuento de Faltantes en Liquidaciones y Bodegas', this.getvalorDecimal( datos.descuento_faltantes_liquidaciones_bodega)],
              ['Descuento por Equipo y Flota', this.getvalorDecimal( datos.descuento_equipo_flota)],
              ['Descuento Autoconsumo', this.getvalorDecimal( datos.descuento_autoconsumo)],
              ['Anticipo Quincenal', this.getvalorDecimal( datos.anticipo_quincenal)],
              ['Otros Descuentos', this.getvalorDecimal( datos.otros_descuentos)],
              ['Descuento de Ausencias Injustificadas', this.getvalorDecimal( datos.descuento_ausencias_injustificadas)],
              ['Descuento Anticipo Bonificación', this.getvalorDecimal( datos.descuento_anticipo_bonificacion)],
              ['Embargos Salariales', this.getvalorDecimal( datos.embargos_salariales)],
              ['Boleto de Ornado', this.getvalorDecimal( datos.boleto_ornato)],
              [{ text: 'TOTAL DESCUENTOS', style: 'totalHeader' }, this.getvalorDecimal( datos.total_Descuento)],
              [{ text: 'NETO RECIBIDO', style: 'totalHeader' }, this.getvalorDecimal( datos.neto_recibido)]
            ]
          }
        },
        {
          text: 'HAGO CONSTAR QUE HE RECIBIDO A MI ENTERA SATISFACCIÓN LAS CANTIDADES ARRIBA DETALLADAS Y ESTOY DE ACUERDO CON LOS DESCUENTOS REALIZADOS POR DISTRIBUIDORA MORAZÁN, S.A.',
          margin: [0, 0, 0, 20]
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
  envioCorreos64 = async (datos: any,fechaActual:string,fechaTitulo:string) => {
    const documentDefinition = {
      content: [
        {
          columns: [
            {
              image: 'data:image/png;base64,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', // Reemplaza con tu imagen en base64
              width: 75,
              alignment: 'left',
            },
            {
              text: 'DISTRIBUIDORA MORAZÁN S.A.\n'+fechaTitulo,
              style: 'header',
              margin: [0, 0, 0, 0]
            }
          ]
        },
        {
          text:  '\nFECHA: '+fechaActual+' \n\n',
          style: 'subheader'
        },
        {
          style: 'table',
          table: {
            headerRows: 1,
            widths: [110, 180, 110, 110],
            body: [
              [
                { text: 'CÓDIGO:', style: 'headertext' }, { text: datos.codigo, style: 'headertext2' },
                { text: 'No. DE NIT:', style: 'headertext' }, { text: datos.nit, style: 'headertext2' }],
              [
                { text: 'NOMBRE:', style: 'headertext' }, { text: datos.nombre, style: 'headertext2' },
                { text: 'No. DPI:', style: 'headertext' }, { text: datos.dpi, style: 'headertext2' }],
              [
                { text: 'CARGO:', style: 'headertext' }, { text: datos.cargo, style: 'headertext2' },
                { text: 'SUCURSAL:', style: 'headertext' }, { text: datos.sucursal, style: 'headertext2' }],
              [
                { text: 'DÍAS DEVENGADOS:', style: 'headertext' }, { text: datos.dias_devengados, style: 'headertext2' },
                { text: 'FECHA DE BAJA:', style: 'headertext' }, { text: datos.fecha_de_baja, style: 'headertext2' }]
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
              ['Salario Devengado', this.getvalorDecimal( datos.salario_devengado)],
              ['Bonificación Dcto 37-2001', this.getvalorDecimal( datos.bonificacion_decreto_37_2001)],
              ['Pago Asueto', this.getvalorDecimal( datos.pago_asueto)],
              ['Otras Bonificaciones', this.getvalorDecimal( datos.otras_bonificaciones)],
              ['Pago Variable', this.getvalorDecimal( datos.pago_variable)],
              ['Pagos Pendientes', this.getvalorDecimal( datos.pago_pendiente)],
              [{ text: 'TOTAL INGRESOS', style: 'totalHeader' }, this.getvalorDecimal( datos.total_ingreso)],
              ['Descuento IGSS', this.getvalorDecimal( datos.descuento_igss)],
              ['Impuesto Sobre la Renta', this.getvalorDecimal( datos.impuesto_sobre_renta)],
              ['Pago Variable 80% aplica', this.getvalorDecimal( datos.pago_variable_80_aplica)],
              ['Descuento Préstamo Salarial', this.getvalorDecimal( datos.descuento_prestamo_salarial)],
              ['Descuento de Faltantes en Liquidaciones y Bodegas', this.getvalorDecimal( datos.descuento_faltantes_liquidaciones_bodega)],
              ['Descuento por Equipo y Flota', this.getvalorDecimal( datos.descuento_equipo_flota)],
              ['Descuento Autoconsumo', this.getvalorDecimal( datos.descuento_autoconsumo)],
              ['Anticipo Quincenal', this.getvalorDecimal( datos.anticipo_quincenal)],
              ['Otros Descuentos', this.getvalorDecimal( datos.otros_descuentos)],
              ['Descuento de Ausencias Injustificadas', this.getvalorDecimal( datos.descuento_ausencias_injustificadas)],
              ['Descuento Anticipo Bonificación', this.getvalorDecimal( datos.descuento_anticipo_bonificacion)],
              ['Embargos Salariales', this.getvalorDecimal( datos.embargos_salariales)],
              ['Boleto de Ornado', this.getvalorDecimal( datos.boleto_ornato)],
              [{ text: 'TOTAL DESCUENTOS', style: 'totalHeader' }, this.getvalorDecimal( datos.total_Descuento)],
              [{ text: 'NETO RECIBIDO', style: 'totalHeader' }, this.getvalorDecimal( datos.neto_recibido)]
            ]
          }
        },
        {
          text: 'HAGO CONSTAR QUE HE RECIBIDO A MI ENTERA SATISFACCIÓN LAS CANTIDADES ARRIBA DETALLADAS Y ESTOY DE ACUERDO CON LOS DESCUENTOS REALIZADOS POR DISTRIBUIDORA MORAZÁN, S.A.',
          margin: [0, 0, 0, 20]
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
    const pdfDoc = pdfMake.createPdf(documentDefinition);
    const pdfBase64 = await new Promise<string>((resolve, reject) => {
      pdfDoc.getBase64((base64) => {
        resolve(base64);
      });
    });
  
    // const pdfBuffer = Buffer.from(pdfBase64, 'base64');
    return pdfBase64;
  }
}

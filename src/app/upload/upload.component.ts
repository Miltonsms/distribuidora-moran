import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { CreatePdfBoletaService } from '../services/create-pdf-boleta.service'
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as XLSX from 'xlsx';
import * as xlsx from 'xlsx';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;
  data = [];
  iniciativaForm: FormGroup;
  envioGrupal=false
  constructor(private fileUploadService: FileUploadService, private CreatePdfBoletaService: CreatePdfBoletaService, private storage: AngularFireStorage, private functions: AngularFireFunctions) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        this.data = XLSX.utils.sheet_to_json(ws);
        this.envioGrupal=true
        console.log(this.data)
        let i: number;
        for (i = 0; i < this.data.length; i++) {
          this.data[i].alerta = false
        }
      };
      reader.readAsBinaryString(this.selectedFile);
    }
  }
  uploadFile() {
    let i: number;
    for (i = 0; i < this.data.length; i++) {
      this.sendEmail(this.data[i].correo, 'Comprobante de pago', 'Envio de comprobante prueba ',i);
      
    }
  }
  generatePDF(datos: any) {
    console.log(datos)
    this.CreatePdfBoletaService.generatePDF(datos)
  }
  EnviarDenuevo(datos: any, index:number){
    this.sendEmail(datos.correo, 'Comprobante de pago', 'Envio de comprobante prueba ',index);
  }
  sendEmail(to: string, subject: string, text: string,indix:number) {
    const callable = this.functions.httpsCallable('sendEmail');
    callable({ to, subject, text }).subscribe(
      response => {
        this.data[indix].alerta = true
      },
      error => {
        console.error('Error sending email', error);
      }
    );
  }

  downloadTemplate() {


    const json = [
      {
        codigo: "valor",
        nombre: "valor",
        correo: "valor",
        cargo: "valor",
        dias_devengados: "valor",
        nit: "valor",
        dpi: "valor",
        sucursal: "valor",
        fecha_de_baja: "valor",
        salario_devengado: "valor",
        bonificacion_decreto_37_2001: "valor",
        pago_asueto: "valor",
        otras_bonificaciones: "valor",
        pago_variable: "valor",
        pago_pendiente: "valor",
        total_ingreso: "valor",
        descuento_igss: "valor",
        impuesto_sobre_renta: "valor",
        pago_variable_80_aplica: "valor",
        descuento_prestamo_salarial: "valor",
        descuento_faltantes_liquidaciones_bodega: "valor",
        descuento_equipo_flota: "valor",
        descuento_autoconsumo: "valor",
        anticipo_quincenal: "valor",
        otros_descuentos: "valor",
        descuento_ausencias_injustificadas: "valor",
        descuento_anticipo_bonificacion: "valor",
        embargos_salariales: "valor",
        boleto_ornato: "valor",
        total_Descuento: "valor",
        neto_recibido: "valor",
      },
    ];

    let workBook = xlsx.utils.book_new();
    const workSheet = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(workBook, workSheet, `hoja1`);
    let exportFileName = `plantillaretencion.xlsx`;
    xlsx.writeFile(workBook, exportFileName);
  }
}

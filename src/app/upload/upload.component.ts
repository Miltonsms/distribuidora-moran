import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {CreatePdfBoletaService} from '../services/create-pdf-boleta.service'
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as XLSX from 'xlsx';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;
  data: any[][] = [];
  iniciativaForm: FormGroup;
  
  constructor(private fileUploadService: FileUploadService,private CreatePdfBoletaService: CreatePdfBoletaService,private storage: AngularFireStorage, private functions: AngularFireFunctions) {}

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
        console.log(this.data)
      };
      reader.readAsBinaryString(this.selectedFile);
    }
  }
  uploadFile() {
this.sendEmail('milsmsramirez@gmail.com', 'Subject', 'Here is your file: ');
  }

  sendEmail(to: string, subject: string, text: string) {
    const callable = this.functions.httpsCallable('sendEmail');
    callable({ to, subject, text }).subscribe(
      response => console.log('Email sent successfully!', response),
      error => console.error('Error sending email', error)
    );
  }

  downloadTemplate() {
    const reader = require("xlsx");

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
        pagopago_asueto: "valor",
        otras_bonificaciones: "valor",
        pago_variable: "valor",
        pago_pendiente: "valor",
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

    let workBook = reader.utils.book_new();
    const workSheet = reader.utils.json_to_sheet(json);
    reader.utils.book_append_sheet(workBook, workSheet, `hoja1`);
    let exportFileName = `plantillaretencion.xlsx`;
    reader.writeFile(workBook, exportFileName);
  }
}

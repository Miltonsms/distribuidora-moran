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
import { formatDate } from '@angular/common';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;
  data = [];
  comprobanteNoEnviado=[]
  iniciativaForm: FormGroup;
  envioGrupal = false
  emailCopiaEnvio: string = ''
  modalShow=false
  spinnerStatus = true
  fechaActual=""
  fechaTitulo=""
  alertaEncabezado=false
  constructor(private fileUploadService: FileUploadService, private CreatePdfBoletaService: CreatePdfBoletaService, private storage: AngularFireStorage, private functions: AngularFireFunctions) { }

  ngOnInit(): void {
  }
  GenerarFechaActual(){
    let fecha = formatDate(new Date(), 'dd/MM/yyyy', 'en-US')
    const fechaActual = new Date();
    const opciones: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    const formatoFecha = new Intl.DateTimeFormat('es-ES', opciones).format(fechaActual);

    // Dividir el formato de fecha en mes y año
    const [mes,de, año] = formatoFecha.split(' ');

    // Obtener el último día del mes
    const ultimoDia = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();

    // Texto deseado
    this.fechaTitulo = `01 AL ${ultimoDia} ${mes.toUpperCase()} ${año.toUpperCase()}`;
    this.fechaActual = fecha
  }
  modal(){
    if(this.modalShow){
      this.modalShow = false
    }else{
      this.modalShow =true
    }
  }
  onFileSelected(event: any) {
    this.data = [];
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
        this.data = [];
        this.comprobanteNoEnviado =[]
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            this.data = XLSX.utils.sheet_to_json(ws);
            this.envioGrupal = true;
            console.log(this.data);
            let i: number;

            const template = {
                codigo: "",
                nombre: "",
                correo: "",
                cargo: "",
                dias_devengados: "",
                nit: "",
                dpi: "",
                sucursal: "",
                salario_devengado: "",
                bonificacion_decreto_37_2001: "",
                pago_asueto: "",
                otras_bonificaciones: "",
                pago_variable: "",
                pago_pendiente: "",
                total_ingreso: "",
                descuento_igss: "",
                impuesto_sobre_renta: "",
                pago_variable_80_aplica: "",
                descuento_prestamo_salarial: "",
                descuento_faltantes_liquidaciones_bodega: "",
                descuento_equipo_flota: "",
                descuento_autoconsumo: "",
                anticipo_quincenal: "",
                otros_descuentos: "",
                descuento_ausencias_injustificadas: "",
                descuento_anticipo_bonificacion: "",
                embargos_salariales: "",
                boleto_ornato: "",
                total_Descuento: "",
                neto_recibido: "",
                fecha_de_baja:"",
                alerta: false,
                mensaje: "Alerta:",
                mensajeActivo: false
            };

            for (i = 0; i < this.data.length; i++) {
                // Asignar valores por defecto para los campos faltantes
                this.data[i] = {...template, ...this.data[i]};
                this.data[i].alerta = false
                this.data[i].mensaje = "Alerta:"
                this.data[i].mensajeActivo = false
            }
        };
        reader.readAsBinaryString(this.selectedFile);
    }
}

async uploadFile() {
  this.spinnerStatus = false
  if((this.fechaActual === "" || this.fechaActual === null || this.fechaActual === undefined) &&
   (this.fechaTitulo === "" || this.fechaTitulo === null || this.fechaTitulo === undefined)){
    this.alertaEncabezado=true
    this.spinnerStatus = true
   }else{
    this.alertaEncabezado=false
    let i: number;
    for (i = 0; i < this.data.length; i++) {
      try {
        let camposVacios = false;
        let emailInvalido = false;
        let contador = 0
        for (const [campo, valor] of Object.entries(this.data[i])) {
          if (campo != "fecha_de_baja" && (valor === "" || valor === null || valor === undefined)) {
            var mensajeUnoCampo =` El campo ${campo} está vacío.`
            var mensajeDosCampo =`, El campo ${campo} está vacío.`
            if(contador==0){
              this.data[i].mensaje=this.data[i].mensaje + mensajeUnoCampo
            }else{
              this.data[i].mensaje=this.data[i].mensaje + mensajeDosCampo
            }
            camposVacios = true;
            this.data[i].mensajeActivo =true
            contador =+1
          }
          if (campo === "correo" && !this.esCorreoValido(valor as string)) {
            var mensajeUno =` El campo ${campo} tiene un correo electrónico inválido: ${valor}`
            var mensajeDos =`, El campo ${campo} tiene un correo electrónico inválido: ${valor}`
            if(contador==0){
              this.data[i].mensaje=this.data[i].mensaje + mensajeUno
            }else{
              this.data[i].mensaje=this.data[i].mensaje + mensajeDos
            }
            emailInvalido = true;
            this.data[i].mensajeActivo =true
            contador =+1
          }
        }
        if (!camposVacios && !emailInvalido) {
          const buffer = await this.CreatePdfBoletaService.envioCorreos64(this.data[i],this.fechaActual,this.fechaTitulo);
          await this.sendEmail(this.data[i].correo + "," + this.emailCopiaEnvio, 'Comprobante de pago', 'Envio de comprobante prueba', i, buffer);
        }else{
          this.comprobanteNoEnviado.push(this.data[i])
          if(i==this.data.length-1){
            this.spinnerStatus = true
            console.log('Finished processing all data.');
          }
        }
      } catch (error) {
        console.error('Error creating PDF buffer:', error);
      }
    }
   }
}
esCorreoValido(correo: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}
generatePDF(datos: any) {
  console.log(datos)
  this.CreatePdfBoletaService.generatePDF(datos,this.fechaActual,this.fechaTitulo)
}
EnviarDenuevo(datos: any, index: number){
  if((this.fechaActual === "" || this.fechaActual === null || this.fechaActual === undefined) &&
  (this.fechaTitulo === "" || this.fechaTitulo === null || this.fechaTitulo === undefined)){
   this.alertaEncabezado=true
   this.spinnerStatus = true
  }else{
    this.alertaEncabezado=false
    this.CreatePdfBoletaService.envioCorreos64(datos,this.fechaActual,this.fechaTitulo).then((buffer) => {
      this.sendEmail(datos.correo, 'Comprobante de pago', 'Envio de comprobante prueba ', index, buffer);
    }).catch((error) => {
      console.error('Error creating PDF buffer:', error);
    });
  }

}
sendEmail(to: string, subject: string, text: string, indix: number, buffer: any) {
  const callable = this.functions.httpsCallable('sendEmail');
  callable({ to, subject, text, buffer }).subscribe(
    response => {
      this.data[indix].alerta = true
      if(indix==this.data.length-1){
        this.spinnerStatus = true
        console.log('Finished processing all data.');
      }
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

downloadComprobantesNoEnviados() {
  let workBook = xlsx.utils.book_new();
  const workSheet = xlsx.utils.json_to_sheet(this.comprobanteNoEnviado);
  xlsx.utils.book_append_sheet(workBook, workSheet, `hoja1`);
  let exportFileName = `plantillaretencion.xlsx`;
  xlsx.writeFile(workBook, exportFileName);
}
}

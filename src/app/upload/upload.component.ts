import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {CreatePdfBoletaService} from '../services/create-pdf-boleta.service'
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as XLSX from 'xlsx';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;
  data: any[][] = [];
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

  generatePDF(datos:any){
    console.log(datos)
    this.CreatePdfBoletaService.generatePDF(datos)
  }
}

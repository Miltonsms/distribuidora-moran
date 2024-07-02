import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {CreatePdfBoletaService} from '../services/create-pdf-boleta.service'
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
  constructor(private fileUploadService: FileUploadService,private CreatePdfBoletaService: CreatePdfBoletaService) {}

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
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).then(() => {
        alert('File uploaded and processed successfully');
      }).catch(error => {
        console.error(error);
        alert('Error uploading file');
      });
    } else {
      alert('Please select a file first');
    }
  }
  generatePDF(datos:any){
    console.log(datos)
    this.CreatePdfBoletaService.generatePDF(datos)
  }
}

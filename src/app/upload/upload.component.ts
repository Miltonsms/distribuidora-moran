import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {CreatePdfBoletaService} from '../services/create-pdf-boleta.service'
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
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
  constructor(private fileUploadService: FileUploadService,private CreatePdfBoletaService: CreatePdfBoletaService,private storage: AngularFireStorage) {}

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const filePath = `uploads/${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.processFile(url);
          });
        })
      ).subscribe();
    } else {
      alert('Please select a file first');
    }
  }

  processFile(url: string) {
    // Aquí puedes descargar y procesar el archivo desde la URL
    fetch(url).then(res => res.arrayBuffer()).then(buffer => {
      const workbook = XLSX.read(buffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      this.data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    });
  }

  generatePDF(datos:any){
    console.log(datos)
    this.CreatePdfBoletaService.generatePDF(datos)
  }
}

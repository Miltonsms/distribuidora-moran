import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFile: File | null = null;
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
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
}

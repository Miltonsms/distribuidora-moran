import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as XLSX from 'xlsx';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage, private functions: AngularFireFunctions) {}

  uploadFile(file: File) {
    const filePath = `uploads/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return task.snapshotChanges().toPromise().then(() => {
      return fileRef.getDownloadURL().toPromise();
    }).then(downloadURL => {
      return this.functions.httpsCallable('processFile')({ url: downloadURL }).toPromise();
    });
  }
}

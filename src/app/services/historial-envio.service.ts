import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistorialEnvioService {

  constructor(private firestore: AngularFirestore) {}

  // Método para guardar el historial de carga
  logUploadDetails(uploadRecord: any): Promise<DocumentReference<unknown>> {
    return this.firestore.collection('historialEnvio').add(uploadRecord); // Retorna la referencia del documento creado
  }

  // Método para obtener el historial de carga
  getUploadHistory(): Observable<any[]> {
    return this.firestore.collection('historialEnvio').valueChanges();
  }
}

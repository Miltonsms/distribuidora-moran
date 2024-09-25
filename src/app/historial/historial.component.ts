import { Component, OnInit } from '@angular/core';
import { HistorialEnvioService} from '../services/historial-envio.service'
import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
import * as xlsx from 'xlsx';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  private subscriptions = new Subscription();
  constructor(private HistorialEnvioService: HistorialEnvioService) { }
  history:any
  itemSeleccionado:any
  ngOnInit(): void {
    this.obtenerHistorialDeCargas();
  }
  obtenerHistorialDeCargas() {
    const historySubscription = this.HistorialEnvioService.getUploadHistory().subscribe({
      next: (data) => {
        this.history =data
        console.log('Historial de carga recibido con éxito:', data);
      },
      error: (error) => {
        console.error('Error al obtener el historial de carga:', error);
      }
    });
    this.subscriptions.add(historySubscription); // Guardar la suscripción para gestionar la desuscripción
  }

  ngOnDestroy() {
    // Desuscribirse para evitar fugas de memoria
    this.subscriptions.unsubscribe();
  }
  setGestion(item){
    this.itemSeleccionado=item
  }
  downloadComprobantes() {
    let workBook = xlsx.utils.book_new();
    const workSheet = xlsx.utils.json_to_sheet(this.itemSeleccionado.comprobanteExitososEnviados);
    xlsx.utils.book_append_sheet(workBook, workSheet, `hoja1`);
    let exportFileName = `${this.itemSeleccionado.email+this.itemSeleccionado.uploadDate+this.itemSeleccionado.horaConMinutos}.xlsx`;
    xlsx.writeFile(workBook, exportFileName);
  }
}

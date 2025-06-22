import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  producto = '';
  especificaciones = '';
  resultados: any[] = [];
  busquedaRealizada = false;
cargando: any;

  buscarProducto() {
    if (this.producto.trim() === '') {
      this.resultados = [];
      this.busquedaRealizada = true;
      return;
    }

    const query = encodeURIComponent(this.producto + ' ' + this.especificaciones);
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, '_blank');

    this.resultados = [];
    this.busquedaRealizada = false;
  }
}

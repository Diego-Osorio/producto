import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

// Importa los iconos
import { addIcons } from 'ionicons';
import { pricetagsOutline, searchOutline } from 'ionicons/icons';

// Registra los iconos
addIcons({
  'pricetags-outline': pricetagsOutline,
  'search-outline': searchOutline,
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: 'app.component.html',
})
export class AppComponent {}

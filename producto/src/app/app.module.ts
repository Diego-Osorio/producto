import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  bootstrap: [],
})
export class AppModule {}

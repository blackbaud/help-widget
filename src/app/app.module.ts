import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { SkyModule } from 'blackbaud-skyux2/dist/core.js';
import { SkyHelpModule } from '../modules/sky-help';

@NgModule({
  imports: [
    BrowserModule,
    //SkyModule,
    SkyHelpModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [Title]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { SkyHelpComponent } from './sky-help.component';

@NgModule({
  imports: [SharedModule],
  declarations: [SkyHelpComponent],
  exports: [SkyHelpComponent]
})
export class SkyHelpModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PogodaPage } from './pogoda';

@NgModule({
  declarations: [
    PogodaPage,
  ],
  imports: [
    IonicPageModule.forChild(PogodaPage),
  ],
})
export class PogodaPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LadPage } from './lad';

@NgModule({
  declarations: [
    LadPage,
  ],
  imports: [
    IonicPageModule.forChild(LadPage),
  ],
})
export class LadPageModule {}

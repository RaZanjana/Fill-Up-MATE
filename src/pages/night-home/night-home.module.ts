import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NightHomePage } from './night-home';

@NgModule({
  declarations: [
    NightHomePage,
  ],
  imports: [
    IonicPageModule.forChild(NightHomePage),
  ],
})
export class NightHomePageModule {}

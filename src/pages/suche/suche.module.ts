import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuchePage } from './suche';

@NgModule({
  declarations: [
    SuchePage,
  ],
  imports: [
    IonicPageModule.forChild(SuchePage),
  ],
})
export class SuchePageModule {}

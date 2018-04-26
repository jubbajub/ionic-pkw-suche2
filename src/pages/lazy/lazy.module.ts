import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyPage } from './lazy';

@NgModule({
  declarations: [
    LazyPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyPage),
  ],
})
export class LazyPageModule {}

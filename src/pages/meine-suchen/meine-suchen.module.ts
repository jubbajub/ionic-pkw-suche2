import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeineSuchenPage } from './meine-suchen';

@NgModule({
  declarations: [
    MeineSuchenPage,
  ],
  imports: [
    IonicPageModule.forChild(MeineSuchenPage),
  ],
})
export class MeineSuchenPageModule {}

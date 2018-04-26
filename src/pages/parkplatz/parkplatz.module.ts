import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkplatzPage } from './parkplatz';

@NgModule({
  declarations: [
    ParkplatzPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkplatzPage),
  ],
})
export class ParkplatzPageModule {}

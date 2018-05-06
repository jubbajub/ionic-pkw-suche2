import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SucheListPage } from './suche-list';

@NgModule({
  declarations: [
    SucheListPage,
  ],
  imports: [
    IonicPageModule.forChild(SucheListPage),
  ],
})
export class SucheListPageModule {}

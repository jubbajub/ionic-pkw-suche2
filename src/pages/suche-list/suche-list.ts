import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SucheListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suche-list',
  templateUrl: 'suche-list.html',
})
export class SucheListPage {
  annonce: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.annonce = navParams.get('annonce');
  }

  ionViewDidLoad(annonce) {
    console.log('ionViewDidLoad SucheListPage');
    alert("SucheListPage-->annonce.brand: "+ this.annonce.brand + "   /// annonce.vehicleType: "+ this.annonce.vehicleType); 
  }

}

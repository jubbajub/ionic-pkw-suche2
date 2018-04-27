
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Annonce } from '../../models/annonce/annonce.interface';


@IonicPage()
@Component({
  selector: 'page-verkaufen',
  templateUrl: 'verkaufen.html',
})
export class VerkaufenPage {

  annonce: Annonce = {
    topic: '',
    vehicleType: '',
    brand: '',
    price: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerkaufenPage');
  }

}

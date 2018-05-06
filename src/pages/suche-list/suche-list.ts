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
    this.annonce = navParams.get('vehicleType');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucheListPage');
    alert("this.annonce: "+ this.annonce + " // Hier müsste noch brand ausgegeben werden, aber wie. Als Array habe ich das noch nicht hinbekommen");
    
  }

}

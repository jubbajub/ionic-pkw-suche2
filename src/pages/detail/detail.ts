import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  myParam: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.myParam = navParams.get('myParam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    console.log('Annonce Key:' + this.myParam.key);
  }

}

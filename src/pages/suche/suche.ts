import { ListPage } from './../list/list';

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-suche',
  templateUrl: 'suche.html',
})

export class SuchePage {
  
  navigateToSucheListPage(vehicleType){
    this.navCtrl.push('SucheListPage',
    {
      'vehicleType': vehicleType
    });
    console.log(vehicleType);
    alert("vehicleType: "+ vehicleType);
  }
  ionViewDidLoad() {
    console.log('_ionViewDidLoad SuchePage');
    console.log('_vehicleType: '+ this.vehicleType);
  }  
  vehicleType: string;
  selectedItem: any;
  icons: string[];

  //1. Array wird hier defniert
  items: Array<{
    title: string, 
    note: string, 
    icon: string,
    id: number,
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth'];

    //2. Array wird erstellt
    this.items = [];

    //3. Array wird gefüllt
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Item ' + this.icons[i] + '['+i+']',
        note: 'This is item #' + i,
        icon: this.icons[i], //icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        id: i,
      });
      // im Template zugriff durch ngFor:
      //item.title
      //item.note
      //item.icon
      //item.id = i

    }
  }

  //im Template ist ein  "click"-Event. Dieser gibt $element und item zurück
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SuchePage, {
      item: item
    });
    console.log(event);
    alert("item clicked event: "+ item);
  }

  doPrompt() {
    let alert = this.alertCtrl.create({
      title: 'MARKE',
      message: 'Marke und Modell eingeben',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel!',
          handler: () => {
            console.log('Cancel clicked');
            console.log(name);
          }
        },
        {
          text: 'Save',
          handler: () => {
            console.log('Saved clicked');
            console.log();
          }
        }
      ]
    });

    alert.present();
  }

  
}

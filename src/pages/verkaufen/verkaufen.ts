
import { AnnonceListService } from './../../services/annonce-list/annonce-list-services';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Annonce } from '../../models/annonce/annonce.interface';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-verkaufen',
  templateUrl: 'verkaufen.html',
})
export class VerkaufenPage {

  testRadioOpen = false;
  testRadioResult: any;

  annonceList$: Observable<Annonce[]>;

  annonce: Annonce = {
    topic: '',
    vehicleType: '',
    brand: '',
    price: 55000, //wenn undefined, dann muss ein Wert im Formular angegeben werden.
    price_from: 0,
    price_to: 100000,
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,

    //'verkaufen' muss im constructor geladen werden und auf den Service zu verweisen
    //im Service sind die Methoden, die am besten die selben Bezeichnungen (addAnnoce) haben wie hier
    private verkaufen: AnnonceListService, 

    private alertCtrl: AlertController,

  ) {
    this.annonceList$ = this.verkaufen
    .getAnnonceList() //returns DB List
    .snapshotChanges() // reurns Key and Value
    .map(
      changes =>{
        return changes.map(c=>({
          key: c.payload.key, ...c.payload.val()
        }))
      }
    )
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VerkaufenPage');
  }

   //mit dieser Methode wird über die 'verkaufen'-Property auf 'AnnonceListService' zugegriffen
  //'verkaufen' muss im constructor geladen werden
  //dort wird das 'item'-Objekt an die gleichnamige Methode addItem übergeben
  addAnnonce(annonce: Annonce){
    this.verkaufen.addAnnonce(annonce);
    console.log("annonce.topic: " + annonce.topic);
    //this.navCtrl.push(SuchePage);
    this.navCtrl.push(VerkaufenPage);
    
  }

  doRadioVehicleType() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Auto oder Motorrad?');

    alert.addInput({
      type: 'radio',
      label: 'Auto',
      value: 'auto',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Motorrad',
      value: 'motorrad'
    });


    alert.addButton('Abbrechen');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.annonce.vehicleType=data;

        //this.verkaufen.addAnnonce(this.annonce);
        console.log("annonce.vehicleType: " + this.annonce.vehicleType);
        // this.navCtrl.push(SuchePage);
        
      }
    });

    alert.present();
  }

  doRadioBrand() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Marke');

    alert.addInput({
      type: 'radio',
      label: 'VW',
      value: 'vw',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'BMW',
      value: 'bmw'
    });


    alert.addButton('Abbrechen');
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.annonce.brand=data;

        //this.verkaufen.addAnnonce(this.annonce);
        console.log("annonce.brand: " + this.annonce.brand);
        // this.navCtrl.push(SuchePage);
      
      }
    });

    alert.present();
  }


}

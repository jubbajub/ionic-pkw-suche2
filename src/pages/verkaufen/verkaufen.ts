import { AnnonceListService } from './../../services/annonce-list/annonce-list-services';

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
    price: 55000 //wenn undefined, dann muss ein Wert im Formular angegeben werden.
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,

    //'verkaufen' muss im constructor geladen werden und auf den Service zu verweisen
    //im Service sind die Methoden, die am besten die selben Bezeichnungen (addAnnoce) haben wie hier
    private verkaufen: AnnonceListService, 
  ) {
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
  }

}

import { SuchePage } from './../suche/suche';
import { AnnonceListService } from './../../services/annonce-list/annonce-list-services';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Annonce } from '../../models/annonce/annonce.interface';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-verkaufen',
  templateUrl: 'verkaufen.html',
})
export class VerkaufenPage {

  annonceList$: Observable<Annonce[]>;

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
    this.navCtrl.push(SuchePage);
  }


  
}

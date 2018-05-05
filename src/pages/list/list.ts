import { AnnonceListService } from './../../services/annonce-list/annonce-list-services';
import { Annonce } from './../../models/annonce/annonce.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  annonceList$: Observable<Annonce[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
      //'verkaufen' muss im constructor geladen werden und auf den Service zu verweisen
    //im Service sind die Methoden, die am besten die selben Bezeichnungen (addAnnoce) haben wie hier
    private verkaufen: AnnonceListService
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
    console.log('ionViewDidLoad ListPage');
  }

    //im Template ist ein  "click"-Event. Dieser gibt $element und annonce zurück
    itemTapped(event, annonce) {
      
      this.navCtrl.push('DetailPage', {'myParam': annonce});
      console.log(event);
      alert("Annonce clicked key: "+ annonce.key);
    }

}

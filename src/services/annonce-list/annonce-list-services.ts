import { Annonce } from './../../models/annonce/annonce.interface';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
//muss als Provider in app.modules.ts hinzugefügt werden
export class AnnonceListService {

    //In der DB werden die Daten in der "Tabelle"'annonce-list' abgelegt
    private annonceListRef = this.db.list<Annonce>('annonce-list');


    constructor (private db: AngularFireDatabase) {
        
    }

    getAnnonceList(){
        return this.annonceListRef;
    }

    //das 'item'-Objekt kommt aus der add-shopping-item.ts
    //
    addAnnonce(annonce: Annonce) {
        return this.annonceListRef.push(annonce);

    }




}
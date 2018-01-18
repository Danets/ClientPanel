import { Injectable } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from '';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Injectable()
export class ClientService {
  clients: Observable<any[]>;
  client: Observable<any>;

  constructor(db: AngularFirestore) {
    this.clients = db.collection('clients').valueChanges();
  }

  getClients() {
    return this.clients;
  }

}

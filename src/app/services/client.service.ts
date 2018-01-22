import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.clients = this.db.list('/clients') as FirebaseListObservable<Client[]>;
  }

  getClients() {
    return this.clients;
  }

  newClient(client: Client) {
  	this.clients.push(client);
  }

  getClient(id:string) {
  	this.client = this.db.object('/clients/'+id) as FirebaseObjectObservable<Client>;
  	return this.client;
  }

  updateClient(id: string, client: Client) {
  	return this.clients.update(id, client); 
  }

  deleteClient(id: string,) {
  	return this.clients.remove(id);
  }

}

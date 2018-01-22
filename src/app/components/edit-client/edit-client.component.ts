import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

import { Client } from '../../models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
	id: string;
	client: Client = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	balance: 0
}

disableBalanceOnEdit: boolean = true;

  constructor(
  	private clientService: ClientService,
  	private router: Router,
  	private route: ActivatedRoute,
    private settingsService: SettingsService
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
  	// Get client
  	this.clientService.getClient(this.id).subscribe(
  		client => this.client = client
  	);
        this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
  	if(!valid) {
  		this.router.navigate(['edit-client/'+this.id]);
  		//this._flashMessagesService.show('Please fill all fields!', { cssClass: 'alert-danger', timeout: 1000 });
  	} else {
  		//console.log('valid holla!');
  		this.clientService.updateClient(this.id, value);
  		this.router.navigate(['edit-client/'+this.id]);
  	}
  }

}

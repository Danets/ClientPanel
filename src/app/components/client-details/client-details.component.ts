import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
id: string;
client: Client;
hasBalance: boolean = false;
showBalanceUpdateInput: boolean = false;

  constructor(
  	private clientService: ClientService,
  	private router: Router,
  	private route: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
  	this.clientService.getClient(this.id).subscribe(
  		client => {
  			if(client.balance > 0) {
  				this.hasBalance = true;
  			}
  			this.client = client;
  		}
  	);
  }

  updateBalance(id: string) {
  	this.clientService.updateClient(this.id, this.client);
  	this.router.navigate(['/client/'+this.id]);
  }

onDelete() {
	if(confirm('Are you sure to delete?')) {
		this.clientService.deleteClient(this.id);
		this.router.navigate(['/']);
	}
}

}

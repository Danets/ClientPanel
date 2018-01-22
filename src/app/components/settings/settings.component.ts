import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import {Router} from '@angular/router';
import {Settings} from '../../models/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
settings: Settings;

  constructor(
  	private router: Router,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
  	this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
  	this.settingsService.changeSettings(this.settings);
  	this.router.navigate(['/settings']);
  }

}

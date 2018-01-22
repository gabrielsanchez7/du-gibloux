import { Component } from '@angular/core';
import { ConfigWeb } from '../services/configWeb';
import { DataFrances } from '../services/dataFrances';
import { DataEspanol } from '../services/dataEspanol';
import { Router } from '@angular/router';

@Component({
	selector: 'prueba',
	templateUrl: '../views/loader.html'
})

export class LoaderComponent {

	public resources: string;
	public data: any;

	constructor(private _router: Router){
		this.resources = ConfigWeb.resourcesImage;
		this.data = DataFrances;
	}

	ngOnInit(){
		setTimeout(() => this._router.navigate(['/']), 2000);
	}

	ngDoCheck(){
		if(this.getLanguage() == 'fra'){
			this.data = DataFrances;
		}
		else if(this.getLanguage() == 'esp'){
			this.data = DataEspanol;
		}
	}

	getLanguage(){
		return localStorage.getItem('language');
	}

}
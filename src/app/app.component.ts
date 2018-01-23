import { Component, DoCheck } from '@angular/core';
import { environment } from '../environments/environment';
import { DataFrances } from './services/dataFrances';
import { DataEspanol } from './services/dataEspanol';
import { GeneralService } from './services/general';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [GeneralService]
})

export class AppComponent implements DoCheck {

	public resourcesImage: string;
	public data: any;
	public language: string;

	constructor(private _router: Router, private _general: GeneralService){
		this.resourcesImage = environment.resourceImage;
		this.data = DataFrances;
	}

	ngOnInit(){
		
	}

	ngDoCheck(){
		setTimeout(() => {
			if(this.getLanguage() == 'fra'){
				this.data = DataFrances;
			}
			else if(this.getLanguage() == 'esp'){
				this.data = DataEspanol;
			}
		}, 500);
	}

	getLanguage(){
		return localStorage.getItem('language');
	}

	selectLanguage($event){
		var target = $event.target;
		if($(target).is('#fra')){
			localStorage.setItem('language', 'fra');
		}
		else if($(target).is('#esp')){
			localStorage.setItem('language', 'esp');
		}
		this._router.navigate(['/loading']);
	}

}

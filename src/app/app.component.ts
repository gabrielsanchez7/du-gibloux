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
		var object = this;

		if($(target).attr('id') == object.getLanguage()){
			$('#msg-language p').fadeIn();
			setTimeout(() => $('#msg-language p').fadeOut(), 5000);
		}
		else {
			this._router.navigate(['/loading']);
		}

		if($(target).is('#fra')){
			localStorage.setItem('language', 'fra');
		}
		else if($(target).is('#esp')){
			localStorage.setItem('language', 'esp');
		}
	}

	closeModal(event){
		this._general.closeModal(event);
	}

	goMenu(event){
		event.preventDefault();
		var target = event.target;
		var top;
		if($(target).text() == "Accueil" || $(target).text() == "Inicio"){
			top = $('#description').offset().top;
			$('body, html').animate({scrollTop: (top-65) + 'px'});
		}
		else if($(target).text() == "Appartaments" || $(target).text() == "Departamentos"){
			top = $('#appartaments').offset().top;
			$('body, html').animate({scrollTop: (top-65) + 'px'});
		}
		else if($(target).text() == "Prix" || $(target).text() == "Precios"){
			top = $('#prices').offset().top;
			$('body, html').animate({scrollTop: (top-65) + 'px'});
		}
		else if($(target).text() == "Situation" || $(target).text() == "Situación"){
			top = $('#situation').offset().top;
			$('body, html').animate({scrollTop: (top-65) + 'px'});
		}
		else if($(target).text() == "Contact" || $(target).text() == "Contacto"){
			top = $('#contact').offset().top;
			$('body, html').animate({scrollTop: (top-65) + 'px'});
		}
	}

	showMenuResponsive(){
		$('#responsive-header').slideToggle();
	}

	clickMenuResponsive(event){
		$('#responsive-header').slideUp();
	}
	
}

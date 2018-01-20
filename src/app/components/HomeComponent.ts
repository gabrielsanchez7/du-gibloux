import { Component, OnDestroy } from '@angular/core';
import { ConfigWeb } from '../services/configWeb';
import { DataFrances } from '../services/dataFrances';
import { DataEspanol } from '../services/dataEspanol';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html'
})

export class HomeComponent implements OnDestroy {

	public resources: string;
	public data: any;
	public position: number;
	public interval: any;
	public slide;
	public banner: string;
	public language: string;

	constructor(){
		this.resources = ConfigWeb.resourcesImage;
		this.data = DataFrances;
		this.position = 1;
		this.banner = '#banner .banner';
	}
	
	ngOnInit(){
		this.initFunctions();
	}

	ngOnDestroy() {
		if(this.slide){
			clearInterval(this.slide);
		}
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

	initFunctions(){
		var ob = this;
		var functions = function(){
			ob.handler();
		};
		window.setTimeout(functions, 5);
	}

	handler(){
		var ob = this;
		$.each(this.data.banner, (index, value) => {
			$('#dots').append('<div class="dot" data-index="' + (index+1) + '"/>')
			$('#dots .dot').first().addClass('active');
		});
		$('#banner .banner').first().addClass('active');
		$(this.banner).first().css('zIndex', 1);
		this.slide = setInterval(() => this.fnSlide(), 5000);
	}

	fnSlide(){
		if(this.position <= $(this.banner).length){
			$('#banner .banner.active').removeClass('active').next().addClass('active');
			$('#dots .dot.active').removeClass('active').next().addClass('active');
			setTimeout(function(){
				$('#banner .banner.active').css('zIndex', 1).siblings('.banner').css('zIndex', 0);
			}, 1200);
			this.position++;
			if(this.position > $(this.banner).length){
				$(this.banner).first().addClass('active').siblings().removeClass('active');
				$('#dots .dot').first().addClass('active').siblings().removeClass('active');
				setTimeout(function(){
					$(this.banner).first().siblings('.banner').css('zIndex', 0);
				}, 1200);
				this.position = 1;
			}
		}
	}

}
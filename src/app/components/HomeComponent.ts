import { Component, OnDestroy } from '@angular/core';
import { ConfigWeb } from '../services/configWeb';
import { DataFrances } from '../services/dataFrances';
import { DataEspanol } from '../services/dataEspanol';
import { GeneralService } from '../services/general';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html',
	providers: [GeneralService]
})

export class HomeComponent implements OnDestroy {

	public resources: string;
	public data: any;
	public position: number;
	public interval: any;
	public slide;
	public banner: string;
	public language: string;

	constructor(private _general: GeneralService){
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
			ob.parseParag();
			ob.sizeIframe();
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

	parseParag(){
		var parags = [
			'#description .dsc',
			'#situation .city p',
			'#situation .infraestructures p',
			'#situation .environment p'
		];

		for(var i = 0; i < parags.length; i++){
			var newParag = this._general.parseParagraph(parags[i]);
			$(parags[i]).html(newParag);
		}
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

	sizeIframe(){
		function fnSize(){
			var size = $('#contact form').height();
			$('#contact iframe').attr('height', size);
		}
		fnSize();
		$(window).resize(fnSize);
	}

}
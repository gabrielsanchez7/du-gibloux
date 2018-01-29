import { Component, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
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
	public regexName: RegExp;
	public regexEmail: RegExp;
	public regexPhone: RegExp;

	constructor(private _general: GeneralService){
		this.resources = environment.resourceImage;
		this.data = DataFrances;
		this.position = 1;
		this.banner = '#banner .banner';
		this.regexName = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ ]{2,30})\w+$/i;
		this.regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
		this.regexPhone = /^[\d+]{9}$/i;
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
			ob.focusInput();
			ob.validateForm();
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
		this._general.scrollMenu();
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

	focusInput(){
		var form = $('#form-contact input[type="text"], #form-contact textarea');
		$(form).focusin(function(ev){
			var target = ev.target;
			var options = {
				transform: 'translateY(-25px)',
				color: '#fff',
				fontSize: '12px'
			};
			$(this).siblings('span').css(options);
		});
		$(form).focusout(function(ev){
			var target = ev.target;
			if($(target).val() == "") {
				$(this).siblings('span').removeAttr('style');
			}
		});
	}

	showIcon(input, icon){
		$('#' + input).siblings('.fa.' + icon).animate({
			right: 0,
			opacity: 1
		}).siblings('.fa').fadeOut().animate({
			right: '-35px',
			opacity: 0
		});
	}

	fnValidation(input, regex){
		var object = this;
		
		$('#' + input).focusout(() => {
			if(regex.test($('#' + input).val())){
				object.showIcon(input, 'fa-check');
				$('#' + input).attr('data-validate', true);
			}
			else {
				object.showIcon(input, 'fa-times');
				$('#' + input).attr('data-validate', false);
			}
		});
	}
	
	validateForm(){
		var object = this;
		var form = $('#form-contact input[type="text"], #form-contact textarea');

		form.after('<i class="fa fa-check"/><i class="fa fa-times"/>');
		
		object.fnValidation('name', object.regexName);
		object.fnValidation('email', object.regexEmail);
		object.fnValidation('address', object.regexName);
		object.fnValidation('location', object.regexName);
		object.fnValidation('phone', object.regexPhone);

		$('#form-contact textarea').focusout(() => {
			if($('#form-contact textarea').val() == ""){
				object.showIcon('message', 'fa-times');
				$('#form-contact textarea').attr('data-validate', false);
			}
			else {
				object.showIcon('message', 'fa-check');
				$('#form-contact textarea').attr('data-validate', true);
			}
		});
	}

	submitForm(){
		var valid = $('#form-contact input[data-validate="false"], #form-contact textarea[data-validate="false"]');
		if(valid.length > 0){
			$('#msg-form .no-valid').fadeIn();
		}
		else {
			$('#msg-form .valid').fadeIn();
		}

		setTimeout(() => {
			$('#msg-form .valid, #msg-form .no-valid').fadeOut();
		}, 5000);
	}

	closeModal(ev){
		this._general.closeModal(ev);
	}
	
}
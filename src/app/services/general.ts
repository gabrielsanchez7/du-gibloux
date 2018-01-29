import { Injectable } from '@angular/core';
import { DataFrances } from './dataFrances';
import { DataEspanol } from './dataEspanol';

@Injectable()

export class GeneralService {

	parseParagraph(paragraph){
		var parag = $(paragraph).text().split('|');
		var newParag = '';
		
		for(var i = 0; i < parag.length; i++){
			newParag += '<p>' + parag[i] + '</p>';
		}

		return newParag;
	}

	scrollMenu(){
		function fnScroll(){
			if($('html, body').scrollTop() != 0) {
				$('header').css({
					position: 'fixed',
					backgroundColor: 'rgba(12, 35, 38, 0.95)'
				});
				$('header a img').width(140);
				$('header #menu-header li').css('lineHeight', '65px');
				$('header > * .media li').css('lineHeight', '65px');
			}
			else {
				$('header').css({
					position: 'absolute',
					backgroundColor: 'rgba(12, 35, 38, 0.85)'
				});
				$('header a img').width(225);
				$('header #menu-header li').css('lineHeight', '100px');
				$('header > * .media li').css('lineHeight', '100px');
			}
		}
		fnScroll();
		$(document).scroll(fnScroll);
	}

	closeModal(ev){
		var target = ev.target;
		$(target).parent().fadeOut();
	}

}
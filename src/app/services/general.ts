import { Injectable } from '@angular/core';
import { DataFrances } from './dataFrances';
import { DataEspanol } from './dataEspanol';

export class GeneralService {

	parseParagraph(paragraph){
		var parag = $(paragraph).text().split('|');
		var newParag = '';
		
		for(var i = 0; i < parag.length; i++){
			newParag += '<p>' + parag[i] + '</p>';
		}

		return newParag;
	}

}
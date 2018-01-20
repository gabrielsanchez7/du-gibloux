import { Injectable } from '@angular/core';
import { DataFrances } from './dataFrances';
import { DataEspanol } from './dataEspanol';

export class GeneralService {

	public data: any;

	checkLanguage(){
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

}
import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { Http } from '@angular/http';
import { MEAT_API } from 'app/app.api';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from 'app/app.error-handler';


@Injectable()
export class RestaurantsService {

	constructor(
		private http: Http
	) { }

	// Serviço Http que será consumido
	restaurants(): Observable<Restaurant[]> {
		return this.http.get(`${MEAT_API}/restaurants`)
			.map(response => response.json()) // substitu erros por respostas Json
			.catch(ErrorHandler.handleError)
	}

}

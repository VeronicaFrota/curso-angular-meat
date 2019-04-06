import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { Http } from '@angular/http';
import { MEAT_API } from 'app/app.api';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantsService {

	// Serviço Http que será consumido


	constructor(
		private http: Http
	) { }

	restaurants(): Observable<Restaurant[]> {
		return this.http.get(`${MEAT_API}/restaurants`)
			.map(response => response.json()) // substitu erros por respostas Json
	}

}

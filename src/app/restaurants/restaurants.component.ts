import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
	selector: 'mt-restaurants',
	templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

	restaurants: Restaurant[]

	constructor(
		private restaurantsService: RestaurantsService
	) { }

	// Para receber a lista de restaurants que será passada pelo observable em .ts
	ngOnInit() {
		this.restaurantsService.restaurants()
			.subscribe(restaurans => this.restaurants = restaurans)
	}

}

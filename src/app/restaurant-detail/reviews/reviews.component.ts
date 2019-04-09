import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'mt-reviews',
	templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

	// Neste não irá fazer o.subcribe e sim usar o pipe async (no HTML)
	reviews: Observable<any>

	constructor(
		private restaurantsService: RestaurantsService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		// this.route.parent.params['id'] =  para acessar sub rotas 
		this.reviews = this.restaurantsService.reviewsOfRestaurants(this.route.parent.snapshot.params['id'])
	}

}

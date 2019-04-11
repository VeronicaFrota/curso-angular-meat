import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
	selector: 'mt-shopping-cart',
	templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

	constructor(
		private shoppingCartService: ShoppingCartService
	) { }

	ngOnInit() {
	}

	// Para expor os itens
	items(): any[] {
		return this.shoppingCartService.items;
	}

	// Para expor o total dos valores
	total(): number {
		return this.shoppingCartService.total()
	}

	// Para limpar todos os itens do carrinho
	clear() {
		this.shoppingCartService.clear();
	}

	// Remove cada item do carrinho
	removeItem(item: any) {
		this.shoppingCartService.removeItem(item)
	}

	// Inclui item ao carrinho
	addItem(item: any) {
		this.shoppingCartService.addItem(item)
	}

}

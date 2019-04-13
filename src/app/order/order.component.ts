import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
	selector: 'mt-order',
	templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	// Para representar as opções que serão utilizadas no radio de escolha de forma de pagamento
	paymentOptions: RadioOption[] = [
		{ label: 'Dinheiro', value: 'MON' },
		{ label: 'Cartão de Débito', value: 'DEB' },
		{ label: 'Cartão Refeição', value: 'REF' }
	]

	constructor() { }

	ngOnInit() {
	}

}

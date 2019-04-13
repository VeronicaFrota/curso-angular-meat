import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
	selector: 'mt-radio',
	templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

	@Input() options: RadioOption[]

	value: any

	constructor() { }

	ngOnInit() {
	}

	// Pegua o valor da opção escolhida
	setValue(value: any) {
		this.value = value
	}

}

import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
	selector: 'mt-radio',
	templateUrl: './radio.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef( () => RadioComponent),		// Fez a referencia ao componente onde tem o radio
			multi: true
		}
	]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

	@Input() options: RadioOption[]

	value: any
	onChange: any 						// Sempre que o valor mudar, chamará a função

	constructor() { }

	ngOnInit() {
	}

	// Pegua o valor da opção escolhida e muda
	setValue(value: any) {
		this.value = value
		this.onChange(this.value)
	}

	// Chamado pela diretiva quando quer passar um valor para o componente
    writeValue(obj: any): void {
		this.value = obj
	}

	// Chama sempre quando o valor interno do componente mudar
	registerOnChange(fn: any): void {
		this.onChange = fn
	}

    // Quando o usuario entrar no componente
    registerOnTouched(fn: any): void {

	}

	// Desabilita	
    setDisabledState?(isDisabled: boolean) {

	}

}

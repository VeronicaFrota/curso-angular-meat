import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
	selector: 'mt-input-container',
	templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

	input: any		// Este obejeto será referenciado em input.component.html, ele é encontrado em [class.has-success]="input.valid && (input.dirty || input.touched)"

	// Interpolação para pegar a mensagem de erro e o campo
	@Input() label: string			// @Input(): Para passar um valor para uma propriedade, ser informado de fora, tem acesso aos dados por uma referencia
	@Input() errorMessage: string	// @Input(): Para passar um valor para uma propriedade, ser informado de fora, tem acesso aos dados por uma referencia
	@ContentChild(NgModel) model: NgModel

	constructor() { }

	ngOnInit() {
	}

	// É chamado quando o conteudo que ficar no lugar de ngContent for definido
	ngAfterContentInit() {
		this.input = this.model
		if(this.input === undefined) {
			throw new Error('Esse componente precisa ser usado com um component NgModel')
		}
	}

	// Para fazer a validação do campo quando houver sucesso ao preencher o campo
	hasSuccess(): boolean {
		return this.input.valid && (this.input.dirty || this.input.touched)
	}

	// Para fazer a validação do campo quando houver erro ao preencher o campo
	hasError(): boolean {
		return this.input.invalid && (this.input.dirty || this.input.touched)
	}

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
	selector: 'mt-menu-item',
	templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

	@Input() menuItem: MenuItem				// para associar ao atributo menu item, devido a este ser um component parent
	@Output() add = new EventEmitter()		// para pegar a saida

	constructor() { }

	ngOnInit() {
	}

	emitAddEvent() {
		this.add.emit(this.menuItem)
	}

}

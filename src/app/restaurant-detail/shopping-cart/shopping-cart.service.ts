import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = []

    clear() {
        this.items = []
    }

    // Adiciona itens do menu
    addItem(item: MenuItem) {
        // Procura se o id do menu item é igual ao id já existente no menu
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)

        // Se encontrar aumenta a quantidade
        if(foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        } else {
            this.items.push(new CartItem(item))    // Se não, adiciona a quantidade
        }
    }

    // Remove os itens do carrinho
    removeItem(item:CartItem) {
        this.items.splice(this.items.indexOf(item), 1)  // Remove um a partir do item, remove a partitr do index que quer remover
    }

    total(): number {
        return this.items
            .map(item => item.value())                  // troca o cartItem para um valor do cartItem
            .reduce((prev, value) => prev + value, 0)   // soma o valor anterior + o valor atual
    }

}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  @Input() addedItems: {name: string, image: string, quantity: number}[]

  itemIndex: number = -1

  removeItem(item) {

    this.itemIndex = this.addedItems.findIndex(it => it.name === item.name)
    this.addedItems.splice(this.itemIndex, 1)

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // OnInit function will carry out once the application is initialized
  title = 'day31_workshop';

  inventory: {name: string, image: string, quantity: number}[] = [];
  itemIndex: number = -1
  quantity: number = 0

  addToCart(item: {name: string, image: string}) {

    this.itemIndex = this.inventory.findIndex(it => it.name === item.name)

    if (this.inventory.length == 0 || this.itemIndex < 0) {
      this.inventory.push({
        name: item.name,
        image: item.image,
        quantity: 1
      })

    } else {
      this.inventory[this.itemIndex].quantity++
    }

    console.log(this.inventory)

  }

  // addToCart($event) {
  //   console.log('Item name: ' + $event.name)
  //   console.log('Item image: ' + $event.image)
  // }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {

  @Output() itemAdded: EventEmitter<{name: string, image: string}> = new EventEmitter()

  inventory: { name: string; image: string;}[] = [
    { name: "apple", image: "assets/images/apple.jpg" },
    { name: "bananas", image: "assets/images/bananas.jpg" },
    { name: "durian", image: "assets/images/durian.jpg" },
    { name: "orange", image: "assets/images/orange.jpg" },
    { name: "peach", image: "assets/images/peach.jpg" }
  ];

  addItem(item: {name: string, image: string}) {
    this.itemAdded.emit(item)
  }

}

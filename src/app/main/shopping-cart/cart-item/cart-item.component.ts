import { Component, Input, OnInit, Output } from '@angular/core';
import { ICartItem } from 'src/interfaces/ICartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: ICartItem;
  constructor() {}

  ngOnInit() {}
}

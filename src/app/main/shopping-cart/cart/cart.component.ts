import { Component, OnInit, ViewChild } from '@angular/core';
import { ICartItem } from 'src/interfaces/ICartItem';
import { IntercommunicationService } from 'src/app/services/intercommunication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Array<ICartItem> = new Array();
  total = 0;
  constructor(private service: IntercommunicationService) {}

  ngOnInit() {
    this.service.recieve().subscribe((res: any) => {
      this.cartItems.push({
        FullName: res.Name,
        FinalPrice: res.Price - res.Price * (res.Discount / 100),
      });
      this.cartItems.forEach((item) => {
        this.total += item.FinalPrice;
        console.log(this.total);
      });
    });
  }

  clearItems() {
    this.cartItems = [];
    this.total = 0;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/IProduct';
import { IntercommunicationService } from 'src/app/services/intercommunication.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private service: IntercommunicationService) {}

  ngOnInit() {}

  onAddToCart() {
    this.service.deliver(this.product);
  }
}

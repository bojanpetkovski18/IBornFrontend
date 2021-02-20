import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/interfaces/IProduct';
import { IntercommunicationService } from 'src/app/services/intercommunication.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  Id!: number;
  products!: Array<IProduct>;
  product!: IProduct;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private service: IntercommunicationService
  ) {}

  ngOnInit() {
    this.Id = this.route.snapshot.params['id'];
    this.productService.getProducts().subscribe((res) => {
      this.product = <IProduct>res.find((x) => x.id == this.Id);
    });
  }

  OnBack() {
    this.location.back();
  }

  onAddToCart() {
    this.service.deliver(this.product);
  }
}

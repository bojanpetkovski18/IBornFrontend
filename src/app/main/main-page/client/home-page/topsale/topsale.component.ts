import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-topsale',
  templateUrl: './topsale.component.html',
  styleUrls: ['./topsale.component.scss'],
})
export class TopsaleComponent implements OnInit {
  listProducts!: Array<IProduct>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.listProducts = res.slice(0, 6);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/IProduct';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gear-list',
  templateUrl: './gear-list.component.html',
  styleUrls: ['./gear-list.component.scss'],
})
export class GearListComponent implements OnInit {
  listProducts!: Array<IProduct>;
  Name = '';
  Brand = '';
  sortBy = '';
  Min = 0;
  Max = 10000;
  p: number = 1;

  constructor(private productService: ProductService) {}

  filterProducts() {
    return this.productService
      .getProducts()
      .pipe(map((items) => items.filter((item) => item.Category === 'Gear')));
  }

  ngOnInit() {
    this.filterProducts().subscribe((res) => (this.listProducts = res));
  }

  onNameClear() {
    this.Name = '';
  }

  onBrandClear() {
    this.Brand = '';
  }

  onPricesReset() {
    this.Min = 0;
    this.Max = 10000;
  }
}

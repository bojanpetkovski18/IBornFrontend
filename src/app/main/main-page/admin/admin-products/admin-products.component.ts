import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/IProduct';
import { ProductService } from 'src/app/services/product.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  flag: boolean = false;
  temp_var: boolean = false;
  data!: Array<IProduct>;
  count: number = 0;
  product!: IProduct;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts().subscribe((res) => {
      this.data = res;
      this.temp_var = true;
      this.count = res.length;
    });
  }

  OnAddNew() {
    this.flag = !this.flag;
    this.service.currentProduct.id = 0;
    this.service.currentProduct.Name = '';
    this.service.currentProduct.Category = '';
    this.service.currentProduct.Brand = '';
    this.service.currentProduct.Img = '';
    this.service.currentProduct.Price = 0;
    this.service.currentProduct.Discount = 0;
    this.service.currentProduct.Quantity = 0;
    this.service.currentProduct.Rating = 0;
    this.service.currentProduct.Description = '';
  }

  onDelete(id: number) {
    if (confirm('Are you sure about deleting this product?')) {
      this.service.deleteProduct(id).subscribe((res) => {
        this.getProducts();
        alertify.success('You have successfuly deleted the product!');
      });
    }
  }

  onEdit(product: IProduct) {
    this.flag = true;
    this.service.currentProduct.id = product.id;
    this.service.currentProduct.Name = product.Name;
    this.service.currentProduct.Category = product.Category;
    this.service.currentProduct.Brand = product.Brand;
    this.service.currentProduct.Img = product.Img;
    this.service.currentProduct.Price = product.Price;
    this.service.currentProduct.Discount = product.Discount;
    this.service.currentProduct.Quantity = product.Quantity;
    this.service.currentProduct.Rating = product.Rating;
    this.service.currentProduct.Description = product.Description;
  }
}

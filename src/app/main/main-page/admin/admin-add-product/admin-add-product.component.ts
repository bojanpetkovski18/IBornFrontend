import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/interfaces/IProduct';
import { ProductService } from 'src/app/services/product.service';
import * as alertify from 'alertifyjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss'],
})
export class AdminAddProductComponent implements OnInit {
  findProduct!: IProduct;

  constructor(public service: ProductService) {}

  ngOnInit() {}

  onClear() {
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

  onUpdate(product: IProduct) {
    if (
      product.id > 0 &&
      product.Name != '' &&
      product.Category != '' &&
      product.Brand != '' &&
      product.Img != '' &&
      product.Price >= 0 &&
      product.Discount >= 0 &&
      product.Rating >= 0
    ) {
      this.service.getProducts().subscribe((res) => {
        this.findProduct = <IProduct>res.find((x) => x.id == product.id);
        console.log(this.findProduct);
        if (this.findProduct == undefined) {
          this.createProduct(product);
        } else {
          this.updateProduct(product);
        }
        alertify.success('The list has been updated!');
      });
    } else alertify.error('You need to enter all fields!');
  }

  createProduct(product: IProduct) {
    this.service.createProduct(product).subscribe();
  }

  updateProduct(product: IProduct) {
    this.service.updateProduct(product).subscribe();
  }
}

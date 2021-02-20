import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';

const HeaderOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  path: string = 'http://localhost:3000/Products';
  //path: string = 'https://localhost:44363/api';

  currentProduct: IProduct = {
    id: 0,
    Name: '',
    Category: '',
    Brand: '',
    Img: '',
    Price: 0,
    Discount: 0,
    Quantity: 0,
    Rating: 0,
    Description: '',
  };

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(
      this.path /* + '/Products'*/,
      HeaderOptions
    );
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(this.path + '/' + id, HeaderOptions);
  }

  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      this.path + '/' + product.id,
      product,
      HeaderOptions
    );
  }

  createProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.path, product, HeaderOptions);
  }
}

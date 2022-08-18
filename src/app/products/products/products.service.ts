import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = "https://localhost:5001/api/products";
  constructor(private httpClient : HttpClient) { }

  getProducts() {
    return this.httpClient.get(this.url);
  }

  getProduct(id: number) {
    return this.httpClient.get(this.url + '/' + id);
  }

  // createProduct(product: Product) {
  //   return this.http.post(this.url, product);
  // }
  // updateProduct(product: Product) {
  //
  //   return this.http.put(this.url, product);
  // }
  // deleteProduct(id: number) {
  //   return this.http.delete(this.url + '/' + id);
  // } TODO : add delete/update/create
}

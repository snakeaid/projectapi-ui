import { Component, OnInit } from '@angular/core';
import {ProductsService} from "./products.service";
import {ProductModel} from "./product";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  product : ProductModel = new ProductModel(-1, "1", new Date(),1, "1");
  products: ProductModel[] = [];
  tableMode = true;

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() : void {
    this.productsService.getProducts()
      .subscribe((data:any) => this.products = <ProductModel[]>data);
  }

  save() {
  //   if (this.product.id == null) {
  //     this.dataService.createProduct(this.product)
  //       .subscribe((data: Product) => this.products.push(data));
  //   } else {
  //     this.dataService.updateProduct(this.product)
  //       .subscribe(data => this.loadProducts());
  //   }
  //   this.cancel();
  }
  editProduct(p: ProductModel) {
  //   this.product = p;
  }
  cancel() {
  //   this.product = new Product();
  //   this.tableMode = true;
  }
  delete(p: ProductModel) {
  //   this.dataService.deleteProduct(p.id)
  //     .subscribe(data => this.loadProducts());
  }
  add() {
  //   this.cancel();
  //   this.tableMode = false;
  }
  //TODO: add functionality
}

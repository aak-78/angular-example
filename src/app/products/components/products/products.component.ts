import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../types/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products = new Observable<ProductInterface[]>;

  constructor(private productsService: ProductsService) {}
  
  ngOnInit(): void {
    console.log("Products started")
    this.products = this.productsService.getProducts()
   
  }
  

}

import { Observable, delay, of, tap } from 'rxjs';

import { Injectable } from '@angular/core';

import data from './products.json';
import { ProductInterface } from '../types/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

    baseUrl = 'https://fakestoreapi.com/products';
    // Fetch Data from local file
    // getProducts(): Observable<ProductInterface[]> {
    //     const products: ProductInterface[] = data;
    //     console.log(data)
    //     return of(products).pipe(delay(3000))
    // }

    constructor(private http: HttpClient) {}
    getProducts(): Observable<ProductInterface[]> {
        return this.http.get<ProductInterface[]>(this.baseUrl)
    }
}
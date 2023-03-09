import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../types/product.interface';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-in-list',
  templateUrl: './product-in-list.component.html',
  styleUrls: ['./product-in-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductInListComponent {
  @Input() product: ProductInterface ={
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    id: 0,
    rating: {
      rate: 0,
      count: 0
    }
  } 
}

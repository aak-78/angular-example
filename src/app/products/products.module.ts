import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ProductsComponent } from './components/products/products.component';
import { reducers } from './state/products.reducer';
import { ProductsService } from './services/products.service';
import { ProductInListComponent } from './components/product-in-list/product-in-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
    declarations: [ProductsComponent, ProductInListComponent, ProductDetailComponent],
    imports: [CommonModule, StoreModule.forFeature('products', reducers)],
    providers: [ProductsService],
    exports: [ProductsComponent]
    
})

export class ProductsModule {}
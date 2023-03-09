import { ProductsStateInterface } from '../types/productsState.interface';

import { createAction, createActionGroup, props } from '@ngrx/store';

import { ProductInterface } from '../types/product.interface';

export const Products = createActionGroup({
  source: 'Products',
  events: {
    // Add
    'Add product': props<{ product: ProductInterface }>,
    // Update
    'Update product': props<{ product: ProductInterface }>,
    // Deleet
    'Delete product': props<{ id: number }>,
  },
});

export const ProductsApi = createAction(
  '[Products] Get products', 
  props<ProductsStateInterface>()
);

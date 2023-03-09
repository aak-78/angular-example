import { createReducer, on } from '@ngrx/store';

import { ProductsStateInterface } from '../types/productsState.interface';
import * as ProductsActions from './products.actions';
import { state } from '@angular/animations';

    export const initialState: ProductsStateInterface = {
    products: [],
    isLoading: false,
    error: null
}

export const reducers = createReducer(
    initialState,
    on(
        ProductsActions.ProductsApi, (state) => ({...state, isLoading: true})
        
    )
)
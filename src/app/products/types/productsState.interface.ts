import { ProductInterface } from './product.interface';

export interface ProductsStateInterface {
    products: ProductInterface[],
    isLoading: boolean,
    error: string | null
}
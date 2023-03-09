export interface ProductInCartInterface {
  productId: number;
  quantity: number;
}

export interface CartInterface {
  id: number;
  userId: number;
  date: Date;
  products: ProductInCartInterface[];
}

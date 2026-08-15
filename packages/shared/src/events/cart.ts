import type { Product } from "../types/product";

export const CART_ADD_EVENT = "cart:add";

export type CartAddEventDetail = {
  product: Product;
};

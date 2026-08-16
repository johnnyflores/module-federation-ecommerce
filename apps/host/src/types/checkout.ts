import type { CartItem } from "@ecommerce/shared";

export type CheckoutData = {
  items: CartItem[];
  subtotal: number;
};

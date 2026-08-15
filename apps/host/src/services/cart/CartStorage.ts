import type { CartItem } from "@ecommerce/shared";

const CART_STORAGE_KEY = "ecommerce-cart";

export const CartStorage = {
  get(): CartItem[] {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    try {
      return JSON.parse(storedCart) as CartItem[];
    } catch {
      return [];
    }
  },

  save(items: CartItem[]): void {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  },

  clear(): void {
    localStorage.removeItem(CART_STORAGE_KEY);
  },
};

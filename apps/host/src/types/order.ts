import type { CartItem } from "@ecommerce/shared";

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  createdAt: string;
};

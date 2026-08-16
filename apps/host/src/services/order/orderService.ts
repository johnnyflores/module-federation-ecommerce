import type { CartItem } from "@ecommerce/shared";
import type { Order } from "@/types/order";

type CreateOrderInput = {
  items: CartItem[];
  total: number;
};

export async function createOrder(input: CreateOrderInput): Promise<Order> {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });

  return {
    id: `ORDER-${Date.now()}`,
    items: input.items,
    total: input.total,
    createdAt: new Date().toISOString(),
  };
}

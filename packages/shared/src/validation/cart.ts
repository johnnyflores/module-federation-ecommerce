import { type CartItem } from "../types/cart";

export type CartValidationErrorCode =
  | "INVALID_QUANTITY"
  | "INVALID_PRICE"
  | "INVALID_PRODUCT";

export type CartValidationError = {
  productId: number;
  code: CartValidationErrorCode;
  message: string;
};

export type CartValidationResult = {
  valid: boolean;
  errors: CartValidationError[];
};

export function validateCart(items: CartItem[]): CartValidationResult {
  const errors: CartValidationError[] = [];

  for (const item of items) {
    if (!item.product.id || !item.product.name) {
      errors.push({
        productId: item.product.id,
        code: "INVALID_PRODUCT",
        message: "Product information is invalid.",
      });
    }

    if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
      errors.push({
        productId: item.product.id,
        code: "INVALID_QUANTITY",
        message: `${item.product.name} has an invalid quantity.`,
      });
    }

    if (!Number.isFinite(item.product.price) || item.product.price < 0) {
      errors.push({
        productId: item.product.id,
        code: "INVALID_PRICE",
        message: `${item.product.name} has an invalid price.`,
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

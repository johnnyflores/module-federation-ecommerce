export type { Product } from "./types/product";
export type { CartItem } from "./types/cart";
export { CART_ADD_EVENT, type CartAddEventDetail } from "./events/cart";
export {
  validateCart,
  type CartValidationError,
  type CartValidationErrorCode,
  type CartValidationResult,
} from "./validation/cart";

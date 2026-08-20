import { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/useCart";
import {
  validateCart,
  type CartValidationError,
  type CartItem,
} from "@ecommerce/shared";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerContent,
  DrawerFooter,
} from "@ecommerce/ui";
import "./Cart.scss";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
  onCheckout?: (items: CartItem[]) => void;
};

function Cart({ isOpen, onClose, onCheckout }: CartProps) {
  const [validationErrors, setValidationErrors] = useState<
    CartValidationError[]
  >([]);
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (!isOpen) {
    return null;
  }

  const handleCheckout = () => {
    const result = validateCart(items);
    setValidationErrors(result.errors);
    if (!result.valid) {
      console.error("Cart validation failed", result.errors);
      return;
    }
    onCheckout?.(items);
  };

  const handleIncreaseQuantity = (productId: number) => {
    setValidationErrors([]);
    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId: number) => {
    setValidationErrors([]);
    decreaseQuantity(productId);
  };

  const handleRemoveFromCart = (productId: number) => {
    setValidationErrors([]);
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    setValidationErrors([]);
    clearCart();
  };

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerHeader>
        <div>
          <DrawerTitle>Cart</DrawerTitle>
          <span className="cart__count">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          aria-label="Close cart"
        >
          <X size={16} aria-hidden="true" />
        </Button>
      </DrawerHeader>
      <DrawerContent>
        <div className="cart__items">
          {items.length === 0 ? (
            <p className="cart__empty">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div className="cart__item" key={item.product.id}>
                <div className="cart__item-image">{item.product.emoji}</div>
                <div className="cart__item-content">
                  <strong>{item.product.name}</strong>
                  <span>${item.product.price.toFixed(2)}</span>
                  <div className="cart__quantity">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => handleDecreaseQuantity(item.product.id)}
                      aria-label={`Decrease ${item.product.name} quantity`}
                    >
                      <Minus size={16} aria-hidden="true" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => handleIncreaseQuantity(item.product.id)}
                      aria-label={`Increase ${item.product.name} quantity`}
                    >
                      <Plus size={16} aria-hidden="true" />
                    </Button>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => handleRemoveFromCart(item.product.id)}
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>
      </DrawerContent>
      {items.length > 0 && (
        <DrawerFooter>
          <div className="cart__footer">
            <div className="cart__total">
              <strong>Total</strong>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
            {validationErrors.length > 0 && (
              <div className="cart__validation" role="alert">
                <strong>Please fix the following:</strong>
                <ul>
                  {validationErrors.map((error) => (
                    <li key={`${error.productId}-${error.code}`}>
                      {error.message}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="cart__actions">
              <Button type="button" onClick={handleCheckout}>
                Checkout
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleClearCart}
              >
                Clear cart
              </Button>
            </div>
          </div>
        </DrawerFooter>
      )}
    </Drawer>
  );
}

export default Cart;

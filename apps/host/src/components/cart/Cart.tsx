import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/useCart";
import {
  validateCart,
  type CartValidationError,
  type CartItem,
} from "@ecommerce/shared";
import { Button } from "@ecommerce/ui";
import "./Cart.css";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
  onCheckout?: (items: CartItem[]) => void;
};

function Cart({ isOpen, onClose, onCheckout }: CartProps) {
  const [validationErrors, setValidationErrors] = useState<
    CartValidationError[]
  >([]);
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;

      if (!panel) {
        return;
      }

      const focusableElements = panel.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleKeyDown);

      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

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
    <div className="cart-drawer">
      <div
        className="cart-drawer__backdrop"
        onClick={onClose}
        aria-hidden="true"
        role="presentation"
      />
      <aside
        ref={panelRef}
        className="cart-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div className="cart-drawer__header">
          <div>
            <h2 id="cart-drawer-title" className="cart-drawer__title">
              Cart
            </h2>
            <span className="cart__count">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>
          <Button
            ref={closeButtonRef}
            type="button"
            variant="secondary"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </Button>
        </div>
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
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => handleIncreaseQuantity(item.product.id)}
                      aria-label={`Increase ${item.product.name} quantity`}
                    >
                      +
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
        {items.length > 0 && (
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
        )}
      </aside>
    </div>
  );
}

export default Cart;

import { useCart } from "@/context/useCart";
import "./Cart.css";
import { Button } from "@ecommerce/ui";

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Cart({ isOpen, onClose }: CartProps) {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (!isOpen) {
    return null;
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="cart-drawer">
      <div
        className="cart-drawer__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="cart-drawer__panel" aria-label="Shopping cart">
        <div className="cart-drawer__header">
          <div>
            <h2 className="cart-drawer__title">Cart</h2>
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
                      onClick={() => decreaseQuantity(item.product.id)}
                      aria-label={`Decrease ${item.product.name} quantity`}
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => increaseQuantity(item.product.id)}
                      aria-label={`Increase ${item.product.name} quantity`}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => removeFromCart(item.product.id)}
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
            <Button
              type="button"
              variant="secondary"
              className="cart__clear"
              onClick={clearCart}
            >
              Clear cart
            </Button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default Cart;

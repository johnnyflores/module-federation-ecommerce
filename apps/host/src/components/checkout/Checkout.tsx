import type { CheckoutData } from "@/types/checkout";
import { Button } from "@ecommerce/ui";
import "./Checkout.scss";

type CheckoutProps = {
  checkout: CheckoutData;
  onBack: () => void;
  onConfirm: () => void;
  isSubmitting: boolean;
};

function Checkout({
  checkout,
  onBack,
  onConfirm,
  isSubmitting,
}: CheckoutProps) {
  const totalItems = checkout.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <main className="checkout">
      <div className="checkout__header">
        <Button type="button" variant="secondary" onClick={onBack}>
          ← Back to cart
        </Button>
        <h1 className="checkout__title">Checkout</h1>
      </div>
      <section
        className="checkout__summary"
        aria-labelledby="checkout-summary-title"
      >
        <h2 id="checkout-summary-title">Order summary</h2>
        <p className="checkout__count">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </p>
        <div className="checkout__items">
          {checkout.items.map((item) => (
            <article className="checkout__item" key={item.product.id}>
              <div className="checkout__item-image">{item.product.emoji}</div>

              <div className="checkout__item-content">
                <strong>{item.product.name}</strong>

                <span>Quantity: {item.quantity}</span>
              </div>

              <strong>
                ${(item.product.price * item.quantity).toFixed(2)}
              </strong>
            </article>
          ))}
        </div>
        <div className="checkout__total">
          <strong>Total</strong>
          <strong>${checkout.subtotal.toFixed(2)}</strong>
        </div>
        <Button
          type="button"
          className="checkout__confirm"
          onClick={onConfirm}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Confirm checkout"}
        </Button>
      </section>
    </main>
  );
}

export default Checkout;

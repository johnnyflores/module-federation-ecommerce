import type { CheckoutData } from "@/types/checkout";
import { Button, Typography } from "@ecommerce/ui";
import "./Checkout.scss";
import { ArrowLeft } from "lucide-react";

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
        <Button
          type="button"
          variant="secondary"
          onClick={onBack}
          className="checkout__back"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <Typography as="span">Back to cart</Typography>
        </Button>
        <Typography as="h1">Checkout</Typography>
      </div>
      <section
        className="checkout__summary"
        aria-labelledby="checkout-summary-title"
      >
        <Typography as="h2" id="checkout-summary-title">
          Order summary
        </Typography>
        <Typography as="p" className="checkout__count">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </Typography>
        <div className="checkout__items">
          {checkout.items.map((item) => (
            <article className="checkout__item" key={item.product.id}>
              <div className="checkout__item-image">{item.product.emoji}</div>
              <div className="checkout__item-content">
                <strong>{item.product.name}</strong>
                <Typography as="span">Quantity: {item.quantity}</Typography>
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

import { Button } from "@ecommerce/ui";
import type { Order } from "@/types/order";
import "./OrderConfirmation.scss";
import { Check } from "lucide-react";

type OrderConfirmationProps = {
  order: Order;
  onContinueShopping: () => void;
};

function OrderConfirmation({
  order,
  onContinueShopping,
}: OrderConfirmationProps) {
  return (
    <main className="order-confirmation">
      <section
        className="order-confirmation__card"
        aria-labelledby="order-confirmation-title"
      >
        <div className="order-confirmation__success" aria-hidden="true">
          <Check size={48} />
        </div>
        <h1 id="order-confirmation-title">Order confirmed!</h1>
        <p>Thank you for your purchase.</p>
        <div className="order-confirmation__details">
          <span>Order number</span>
          <strong>{order.id}</strong>
        </div>
        <div className="order-confirmation__details">
          <span>Total</span>
          <strong>${order.total.toFixed(2)}</strong>
        </div>
        <p className="order-confirmation__date">
          Placed on {new Date(order.createdAt).toLocaleString()}
        </p>
        <Button type="button" onClick={onContinueShopping}>
          Continue shopping
        </Button>
      </section>
    </main>
  );
}

export default OrderConfirmation;

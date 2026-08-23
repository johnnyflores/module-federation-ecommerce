import { Button, Typography } from "@ecommerce/ui";
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
        <Typography as="h1" id="order-confirmation-title">
          Order confirmed!
        </Typography>
        <Typography as="p">Thank you for your purchase.</Typography>
        <div className="order-confirmation__details">
          <Typography as="span">Order number</Typography>
          <strong>{order.id}</strong>
        </div>
        <div className="order-confirmation__details">
          <Typography as="span">Total</Typography>
          <strong>${order.total.toFixed(2)}</strong>
        </div>
        <Typography
          as="p"
          className="order-confirmation__date"
          variant="body-sm"
        >
          Placed on {new Date(order.createdAt).toLocaleString()}
        </Typography>
        <Button type="button" onClick={onContinueShopping}>
          Continue shopping
        </Button>
      </section>
    </main>
  );
}

export default OrderConfirmation;

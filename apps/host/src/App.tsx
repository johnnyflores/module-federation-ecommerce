import { Suspense, lazy, useState } from "react";
import Cart from "@/components/cart/Cart";
import Header from "@/components/header/Header";
import type { CartItem } from "@ecommerce/shared";
import Checkout from "@/components/checkout/Checkout";
import type { CheckoutData } from "@/types/checkout";
import type { Order } from "@/types/order";
import OrderConfirmation from "@/components/order-confirmation/OrderConfirmation";
import { createOrder } from "@/services/order/orderService";
import { useCart } from "@/context/useCart";

const Products = lazy(() => import("products/Products"));

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState<CheckoutData | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const { clearCart } = useCart();

  const handleCheckout = (items: CartItem[]) => {
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    setCheckout({
      items,
      subtotal,
    });
  };

  const handleConfirmCheckout = async () => {
    if (!checkout || isSubmittingOrder) {
      return;
    }
    setIsSubmittingOrder(true);

    try {
      const createdOrder = await createOrder({
        items: checkout.items,
        total: checkout.subtotal,
      });
      setOrder(createdOrder);
      clearCart();
      setCheckout(null);
    } catch (error) {
      console.error("Checkout failed", error);
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  const renderMainContent = () => {
    if (order) {
      return (
        <OrderConfirmation
          order={order}
          onContinueShopping={() => {
            setOrder(null);
            setIsCartOpen(false);
          }}
        />
      );
    }
    if (checkout) {
      return (
        <Checkout
          checkout={checkout}
          onBack={() => setCheckout(null)}
          onConfirm={handleConfirmCheckout}
          isSubmitting={isSubmittingOrder}
        />
      );
    }
    return (
      <Suspense fallback={<p>Loading Products...</p>}>
        <Products />
      </Suspense>
    );
  };

  return (
    <div>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
      {renderMainContent()}
    </div>
  );
}

export default App;

import { Suspense, lazy, useState } from "react";
import Cart from "@/components/cart/Cart";
import Header from "@/components/header/Header";
import type { CartItem } from "@ecommerce/shared";
import Checkout from "@/components/checkout/Checkout";
import type { CheckoutData } from "@/types/checkout";

const Products = lazy(() => import("products/Products"));

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkout, setCheckout] = useState<CheckoutData | null>(null);

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

  const handleConfirmCheckout = () => {
    console.log("Checkout confirmed", checkout);
  };

  return (
    <div>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />
      {checkout ? (
        <Checkout
          checkout={checkout}
          onBack={() => setCheckout(null)}
          onConfirm={handleConfirmCheckout}
        />
      ) : (
        <Suspense fallback={<p>Loading Products...</p>}>
          <Products />
        </Suspense>
      )}
    </div>
  );
}

export default App;

import { Suspense, lazy, useState } from "react";
import Cart from "@/components/cart/Cart";
import Header from "@/components/header/Header";

const Products = lazy(() => import("products/Products"));

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Suspense fallback={<p>Loading Products...</p>}>
        <Products />
      </Suspense>
    </div>
  );
}

export default App;

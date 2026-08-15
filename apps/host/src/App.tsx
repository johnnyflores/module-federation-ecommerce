import { Suspense, lazy } from "react";
import Cart from "@/components/cart/Cart";

const Products = lazy(() => import("products/Products"));

function App() {
  return (
    <div>
      <h1>E-commerce Host</h1>
      <Suspense fallback={<p>Loading Products...</p>}>
        <Cart />
        <Products />
      </Suspense>
    </div>
  );
}

export default App;

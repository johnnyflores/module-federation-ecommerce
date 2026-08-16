import { Suspense, lazy } from "react";
import Cart from "@/components/cart/Cart";
import Header from "@/components/header/Header";

const Products = lazy(() => import("products/Products"));

function App() {
  return (
    <div>
      <Header />
      <Cart />
      <Suspense fallback={<p>Loading Products...</p>}>
        <Products />
      </Suspense>
    </div>
  );
}

export default App;

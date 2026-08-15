import { Suspense, lazy } from "react";
import CartDebug from "@/components/CartDebug";

const Products = lazy(() => import("products/Products"));

function App() {
  return (
    <div>
      <h1>E-commerce Host</h1>

      <Suspense fallback={<p>Loading Products...</p>}>
        <Products />
        <CartDebug />
      </Suspense>
    </div>
  );
}

export default App;

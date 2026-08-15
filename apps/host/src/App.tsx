import { Suspense, lazy } from "react";

const Products = lazy(() => import("products/Products"));

function App() {
  return (
    <div>
      <h1>E-commerce Host</h1>

      <Suspense fallback={<p>Loading Products...</p>}>
        <Products />
      </Suspense>
    </div>
  );
}

export default App;

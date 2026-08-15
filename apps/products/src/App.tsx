import Card from "@/components/card/Card";
import { products } from "@/data/products";
import "./index.css";

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Products</h1>
        <p>Discover our latest products.</p>
      </header>
      <section className="page-grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default App;

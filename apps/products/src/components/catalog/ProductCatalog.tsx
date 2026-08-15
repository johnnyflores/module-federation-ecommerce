import { products } from "@/data/products";
import Card from "@/components/card/Card";
import "./ProductCatalog.css";

function ProductCatalog() {
  return (
    <section className="product-catalog">
      <div className="product-catalog__header">
        <h1 className="product-catalog__title">Product Catalog</h1>

        <p className="product-catalog__description">
          Explore our latest products.
        </p>
      </div>

      <div className="product-catalog__grid">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductCatalog;

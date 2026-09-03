import { Button, Header, Typography } from "@ecommerce/ui";
import { Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import "./products.scss";
import { ArrowLeft } from "lucide-react";

const Products = lazy(() => import("products/Products"));

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Header>
        <Button asChild variant="secondary">
          <NavLink to="/">
            <ArrowLeft size={16} aria-hidden="true" />
            <Typography as="span">Back to Home</Typography>
          </NavLink>
        </Button>
      </Header>
      <Suspense fallback={<p>Loading Products...</p>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default ProductsPage;

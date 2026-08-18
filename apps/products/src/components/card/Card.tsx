import type { Product } from "@ecommerce/shared";
import { Button } from "@ecommerce/ui";
import { CART_ADD_EVENT, type CartAddEventDetail } from "@ecommerce/shared";
import "./Card.scss";

type CardProps = {
  product: Product;
};

function Card({ product }: CardProps) {
  function handleAddToCart() {
    const detail: CartAddEventDetail = {
      product,
    };

    window.dispatchEvent(
      new CustomEvent(CART_ADD_EVENT, {
        detail,
      }),
    );
  }
  return (
    <article className="card">
      <div className="card__image">{product.emoji}</div>
      <div className="card__content">
        <span className="card__category">{product.category}</span>
        <h2 className="card__name">{product.name}</h2>
        <strong className="card__price">
          ${product.price.toLocaleString()}
        </strong>
        <Button
          type="button"
          className="card__button"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </article>
  );
}

export default Card;

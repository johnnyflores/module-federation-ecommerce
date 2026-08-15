import type { Product } from "@/types/product";
import "./Card.css";

type CardProps = {
  product: Product;
};

function Card({ product }: CardProps) {
  return (
    <article className="card">
      <div className="card__image">{product.emoji}</div>

      <div className="card__content">
        <span className="card__category">{product.category}</span>

        <h2 className="card__name">{product.name}</h2>

        <strong className="card__price">
          ${product.price.toLocaleString()}
        </strong>

        <button className="card__button" type="button">
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default Card;

import type { Product } from "@ecommerce/shared";
import {
  Button,
  Card as UICard,
  CardHeader as UICardHeader,
  CardTitle as UICardTitle,
  CardDescription as UICardDescription,
  CardContent as UICardContent,
  CardAction as UICardAction,
  CardImage as UICardImage,
} from "@ecommerce/ui";
import { CART_ADD_EVENT, type CartAddEventDetail } from "@ecommerce/shared";

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
    <UICard>
      <UICardImage>{product.emoji}</UICardImage>
      <UICardHeader>
        <UICardTitle>{product.name}</UICardTitle>
        <UICardDescription>{product.category}</UICardDescription>
      </UICardHeader>
      <UICardContent>
        <strong>${product.price.toLocaleString()}</strong>
      </UICardContent>
      <UICardAction>
        <Button type="button" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </UICardAction>
    </UICard>
  );
}

export default Card;

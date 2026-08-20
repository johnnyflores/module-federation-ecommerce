import { useCart } from "@/context/useCart";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@ecommerce/ui";
import "./CartBadge.scss";

type CartBadgeProps = {
  onClick: () => void;
};

function CartBadge({ onClick }: CartBadgeProps) {
  const { items } = useCart();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      type="button"
      className="cart-badge"
      onClick={onClick}
      aria-label={`Open cart with ${totalItems} ${
        totalItems === 1 ? "item" : "items"
      }`}
    >
      <Badge content={totalItems > 0 ? totalItems : undefined}>
        <ShoppingCart aria-hidden="true" size={24} />
      </Badge>
    </button>
  );
}

export default CartBadge;

import { useCart } from "@/context/useCart";
import "./CartBadge.css";

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
      <span aria-hidden="true">🛒</span>

      {totalItems > 0 && (
        <span className="cart-badge__count">{totalItems}</span>
      )}
    </button>
  );
}

export default CartBadge;

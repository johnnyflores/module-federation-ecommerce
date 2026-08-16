import { useCart } from "@/context/useCart";
import "./CartBadge.css";

function CartBadge() {
  const { items } = useCart();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-badge" aria-label={`Cart: ${totalItems} items`}>
      <span aria-hidden="true">🛒</span>
      {totalItems > 0 && (
        <span className="cart-badge__count">{totalItems}</span>
      )}
    </div>
  );
}

export default CartBadge;

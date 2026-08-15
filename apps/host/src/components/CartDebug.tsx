import { useCart } from "../context/useCart";

function CartDebug() {
  const { items } = useCart();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <aside>
      <h2>Cart</h2>

      <p>Items: {totalItems}</p>

      {items.map((item) => (
        <div key={item.product.id}>
          <span>
            {item.product.emoji} {item.product.name}
          </span>

          <span> × {item.quantity}</span>
        </div>
      ))}
    </aside>
  );
}

export default CartDebug;

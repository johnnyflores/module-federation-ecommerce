import { useCart } from "../context/useCart";

function CartDebug() {
  const { items } = useCart();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return <div>Cart items: {totalItems}</div>;
}

export default CartDebug;

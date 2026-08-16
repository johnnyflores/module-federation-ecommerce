import CartBadge from "@/components/cart/CartBadge";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">E-commerce Host</h1>

        <CartBadge />
      </div>
    </header>
  );
}

export default Header;

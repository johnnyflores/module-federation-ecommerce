import CartBadge from "@/components/cart/CartBadge";
import "./Header.scss";

type HeaderProps = {
  onCartClick: () => void;
};

function Header({ onCartClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">E-commerce Host</h1>
        <CartBadge onClick={onCartClick} />
      </div>
    </header>
  );
}

export default Header;

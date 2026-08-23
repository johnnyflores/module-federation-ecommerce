import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";
import CartBadge from "@/components/cart/CartBadge";
import "./Header.scss";
import { Typography } from "@ecommerce/ui";

type HeaderProps = {
  onCartClick: () => void;
};

function Header({ onCartClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__content">
        <Typography as="h1" className="header__title">
          E-commerce Host
        </Typography>
        <CartBadge onClick={onCartClick} />
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;

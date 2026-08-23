import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";
import CartBadge from "@/components/cart/CartBadge";
import { Typography, Header as UIHeader } from "@ecommerce/ui";
import "./Header.scss";

type HeaderProps = {
  onCartClick: () => void;
};

function Header({ onCartClick }: HeaderProps) {
  return (
    <UIHeader className="header">
      <Typography as="h1" className="header__title">
        E-commerce Host
      </Typography>
      <CartBadge onClick={onCartClick} />
      <ThemeToggle />
    </UIHeader>
  );
}

export default Header;

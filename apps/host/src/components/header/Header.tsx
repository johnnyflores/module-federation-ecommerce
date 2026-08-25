import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";
import CartBadge from "@/components/cart/CartBadge";
import Logo from "@/components/logo/Logo";
import Navbar from "@/components/navbar/Navbar";
import { Header as UIHeader } from "@ecommerce/ui";
import "./Header.scss";

type HeaderProps = {
  onCartClick: () => void;
};

function Header({ onCartClick }: HeaderProps) {
  return (
    <UIHeader className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__nav">
        <Navbar />
        <CartBadge onClick={onCartClick} />
        <ThemeToggle />
      </div>
    </UIHeader>
  );
}

export default Header;

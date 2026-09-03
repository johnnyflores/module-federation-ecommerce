import { ThemeToggle } from "@/components/themeToggle/ThemeToggle";
import { Button, Drawer, DrawerContent, DrawerHeader } from "@ecommerce/ui";
import CartBadge from "@/components/cart/CartBadge";
import Logo from "@/components/logo/Logo";
import Navbar from "@/components/navbar/Navbar";
import { Header as UIHeader } from "@ecommerce/ui";
import "./Header.scss";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type HeaderProps = {
  onCartClick: () => void;
};

function Header({ onCartClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <UIHeader className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__nav">
        <div className="header__links">
          <Navbar />
        </div>
        <CartBadge onClick={onCartClick} />
        <ThemeToggle />
        <Button
          type="button"
          className="header__menu-button"
          variant="secondary"
          onClick={handleMenuClick}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Menu size={24} />
        </Button>
      </div>
      <Drawer
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        className="header__mobile-menu"
      >
        <DrawerHeader>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={16} aria-hidden="true" />
          </Button>
        </DrawerHeader>
        <DrawerContent>
          <Navbar />
        </DrawerContent>
      </Drawer>
    </UIHeader>
  );
}

export default Header;

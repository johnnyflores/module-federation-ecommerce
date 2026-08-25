import { ROUTES } from "@/routes/common/routePath";
import { Button } from "@ecommerce/ui";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const { pathname } = useLocation();

  const routes = [
    {
      href: ROUTES.HOME,
      label: "Home",
    },
    {
      href: ROUTES.PRODUCTS,
      label: "Products",
    },
  ];

  return (
    <nav className="navbar">
      {routes?.map((route) => (
        <Button key={route.href} asChild variant="link">
          <NavLink
            to={route.href}
            className={pathname === route.href ? "is-active" : ""}
          >
            {route.label}
          </NavLink>
        </Button>
      ))}
    </nav>
  );
}
export default Navbar;

import { Link } from "react-router-dom";
import { Typography } from "@ecommerce/ui";
import { Store } from "lucide-react";
import { ROUTES } from "@/routes/common/routePath";
import "./Logo.scss";

type LogoProps = {
  url?: string;
};

function Logo(props: LogoProps) {
  return (
    <Link to={props.url || ROUTES.HOME} className="logo">
      <Store size={32} color={`var(--color-text-primary)`} aria-label="Store" />
      <Typography
        as="span"
        variant="body-sm"
        className="logo__text hidden md:inline"
      >
        E-Commerce
      </Typography>
    </Link>
  );
}

export default Logo;

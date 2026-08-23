import React from "react";
import "./Typography.scss";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TypographyVariant = "display" | "body" | "body-sm" | "caption";

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  as?: TypographyElement;
  variant?: TypographyVariant;
};

export function Typography({
  as: Component = "p",
  variant,
  children,
  className = "",
  ...props
}: TypographyProps) {
  const variantClass = variant ? `ui-typography--variant-${variant}` : "";
  return (
    <Component
      className={`ui-typography ui-typography--${Component} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

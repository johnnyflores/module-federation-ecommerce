import React from "react";
import "./Typography.scss";

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  as?: TypographyElement;
};

export function Typography({
  as: Component = "p",
  children = "",
  className = "",
  ...props
}: TypographyProps) {
  return (
    <Component
      className={`ui-typography ui-typography--${Component} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

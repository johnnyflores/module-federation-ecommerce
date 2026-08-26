import React from "react";
import { Separator as SeparatorPrimitive } from "@radix-ui/react-separator";
import "./Separator.scss";

export function Separator({
  className = "",
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive>) {
  return (
    <SeparatorPrimitive
      orientation={orientation}
      decorative={decorative}
      className={`separator ${orientation} ${className}`}
      {...props}
    />
  );
}
